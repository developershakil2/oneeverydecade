// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OEDNFTMarketplace is ERC721Enumerable, Ownable {
    uint256 public constant START_YEAR = 2025;
    uint256 public constant END_YEAR = 2135;
    uint256 public constant INITIAL_PRICE = 0.5 ether;
    uint256 public constant EARLY_INCREMENT = 0.5 ether;
    uint256 public constant LATE_INCREMENT = 1 ether;
    uint256 public constant FINAL_PRICE = 21.5 ether;
    
    struct NFTMetadata {
        string name;
        string description;
        string image;
    }
    
    mapping(uint256 => uint256) public nftPrices;
    mapping(uint256 => NFTMetadata) public nftMetadata;
    uint256 public nextTokenId;

    event NFTMinted(uint256 indexed tokenId, address indexed owner, uint256 price, string name, string description, string image);
    event NFTResold(uint256 indexed tokenId, address indexed seller, address indexed buyer, uint256 price);
    
    constructor() ERC721("OED NFT", "OED") {}
    
    function getCurrentYear() public view returns (uint256) {
        return START_YEAR + ((block.timestamp - block.timestamp % 31556952) / 31556952);
    }
    
    function calculatePrice(uint256 year) public pure returns (uint256) {
        if (year < START_YEAR) return 0;
        if (year > END_YEAR) return FINAL_PRICE;
        
        if (year <= 2034) {
            return INITIAL_PRICE + (year - START_YEAR) * EARLY_INCREMENT;
        }
        if (year == END_YEAR) {
            return FINAL_PRICE;
        }
        
        return 6 ether + ((year - 2035) / 10) * LATE_INCREMENT;
    }
    


function mintNFT(string memory name, string memory description, string memory image) external payable {
    uint256 year = getCurrentYear();
    uint256 price = calculatePrice(year);
    require(price > 0, "Invalid minting period");
    require(msg.value == price, "Incorrect ETH amount");
    
    // Correct minting limit logic
    require(
        (year <= 2034 && nextTokenId < 10) || (year > 2034 && nextTokenId < (10 + (year - 2035) / 10)),
        "Minting limit reached"
    );

    nftPrices[nextTokenId] = price;
    nftMetadata[nextTokenId] = NFTMetadata(name, description, image);
    _safeMint(msg.sender, nextTokenId);
    emit NFTMinted(nextTokenId, msg.sender, price, name, description, image);
    nextTokenId++;
}


    
    function resellNFT(uint256 tokenId, uint256 price) external {
        require(ownerOf(tokenId) == msg.sender, "Not NFT owner");
        nftPrices[tokenId] = price;
    }
    
    function buyNFT(uint256 tokenId) external payable {
        address seller = ownerOf(tokenId);
        require(seller != msg.sender, "Can't buy own NFT");
        uint256 price = nftPrices[tokenId];
        require(msg.value == price, "Incorrect ETH amount");
        
        payable(seller).transfer(msg.value);
        _transfer(seller, msg.sender, tokenId);
        emit NFTResold(tokenId, seller, msg.sender, price);
    }
    



    function getAllNFTs() external view returns (
    uint256[] memory, 
    address[] memory, 
    uint256[] memory, 
    string[] memory, 
    string[] memory, 
    string[] memory
) {
    uint256 totalNFTs = totalSupply();
    uint256[] memory tokenIds = new uint256[](totalNFTs);
    address[] memory owners = new address[](totalNFTs);
    uint256[] memory prices = new uint256[](totalNFTs);
    string[] memory names = new string[](totalNFTs);
    string[] memory descriptions = new string[](totalNFTs);
    string[] memory images = new string[](totalNFTs);

    for (uint256 i = 0; i < totalNFTs; i++) {
        uint256 tokenId = tokenByIndex(i);
        tokenIds[i] = tokenId;
        owners[i] = ownerOf(tokenId);
        prices[i] = nftPrices[tokenId];
        NFTMetadata memory metadata = nftMetadata[tokenId];
        names[i] = metadata.name;
        descriptions[i] = metadata.description;
        images[i] = metadata.image;
    }

    return (tokenIds, owners, prices, names, descriptions, images);
}


    function getNFT(uint256 tokenId) external view returns (uint256, address, uint256, string memory, string memory, string memory) {
        require(_exists(tokenId), "NFT does not exist");
        
        address owner = ownerOf(tokenId);
        uint256 price = nftPrices[tokenId];
        NFTMetadata memory metadata = nftMetadata[tokenId];
        
        return (tokenId, owner, price, metadata.name, metadata.description, metadata.image);
    }

}
