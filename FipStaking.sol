// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


/**
 * @title Fipcoin_staking
 * @dev This contract allows users to stake BTEG tokens, with various lock-in periods and rewards.
 * The contract supports staking, withdrawal, and reward calculations.
 */




interface IERC20Upgradeable {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to another (`to`).
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by 
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Transfers `amount` tokens from the caller's account to `recipient`.
     * 
     * Returns a boolean value indicating whether the operation succeeded.
     */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be allowed to spend
     * on behalf of `owner` through {transferFrom}. This is zero by default.
     * 
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets the amount of tokens that `spender` is allowed to spend on behalf of `owner`.
     * 
     * Returns a boolean value indicating whether the operation succeeded.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Transfers `amount` tokens from `sender` to `recipient` using the allowance mechanism.
     * 
     * `amount` is then deducted from the caller's allowance.
     * 
     * Returns a boolean value indicating whether the operation succeeded.
     */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}
/**
 * @dev This contract provides basic access control with the deployer as the initial owner.
 */
abstract contract Initializable {
    // Indicates whether the contract has been initialized.
    bool private _initialized;

    // Indicates whether the contract is currently being initialized.
    bool private _initializing;

    /**
     * @dev Modifier to protect an initializer function from being invoked twice.
     * 
     * The function will only execute if the contract is not yet initialized or is 
     * currently in the initialization process. If it's a top-level call, it sets 
     * the contract as initializing and marks it as initialized after execution.
     */
    modifier initializer() {
        require(
            _initializing || !_initialized,
            "Initializable: contract is already initialized"
        );
        bool isTopLevelCall = !_initializing;
        if (isTopLevelCall) {
            _initializing = true;
            _initialized = true;
        }
        _;
        if (isTopLevelCall) {
            _initializing = false;
        }
    }

    /**
     * @dev Internal function to initialize the contract. This is a placeholder function
     * that can be overridden by inheriting contracts for specific initialization logic.
     * 
     * Should be called in the derived contract's constructor or initialization function.
     */
    function __Initializable_init() internal initializer {
        // Initialization logic can be added here.
    }

    /**
     * @dev Internal function to check if the contract has been initialized.
     * 
     * Returns true if the contract has been initialized, false otherwise.
     */
    function _isInitialized() internal view returns (bool) {
        return _initialized;
    }

    /**
     * @dev Internal function to check if the contract is currently being initialized.
     * 
     * Returns true if the contract is being initialized, false otherwise.
     */
    function _isInitializing() internal view returns (bool) {
        return _initializing;
    }
}
/**
 * @dev This contract provides a basic access control mechanism where there is an account (an owner) 
 * that can be granted exclusive access to specific functions.
 */
abstract contract AccessControlUpgradeable {
    mapping(address => bool) private _admins;

    function __AccessControl_init() internal {
        _admins[msg.sender] = true;
    }

    modifier onlyAdmin() {
        require(isAdmin(msg.sender), "AccessControl: caller is not an admin");
        _;
    }

    function isAdmin(address account) public view returns (bool) {
        return _admins[account];
    }

    function addAdmin(address account) public onlyAdmin {
        _admins[account] = true;
    }

    function removeAdmin(address account) public onlyAdmin {
        _admins[account] = false;
    }
}
abstract contract OwnableUpgradeable is Initializable, AccessControlUpgradeable {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    function __Ownable_init() internal initializer {
        __AccessControl_init();
        __Ownable_init_unchained();
    }

    function __Ownable_init_unchained() internal {
        _transferOwnership(msg.sender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner() == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Internal function that transfers ownership of the contract to a new account (`newOwner`).
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }

    uint256[49] private __gap;
}
/**
 * @dev This contract provides a mechanism to allow for upgradeability via the UUPS pattern.
 */
abstract contract UUPSUpgradeable is Initializable {
    address private _implementation;

    event Upgraded(address indexed newImplementation);

    modifier onlyProxy() {
        require(address(this) != _implementation, "UUPSUpgradeable: must be called through proxy");
        require(_implementation != address(0), "UUPSUpgradeable: implementation is not set");
        _;
    }

    function __UUPSUpgradeable_init() internal initializer {
        __Initializable_init();
    }

    function _authorizeUpgrade(address newImplementation) internal virtual;

    function upgradeTo(address newImplementation) external onlyProxy {
        _authorizeUpgrade(newImplementation);
        _implementation = newImplementation;
        emit Upgraded(newImplementation);
    }

    function _upgradeTo(address newImplementation) internal {
        _authorizeUpgrade(newImplementation);
        _implementation = newImplementation;
        emit Upgraded(newImplementation);
    }
    
    function implementation() internal view returns (address) {
        return _implementation;
    }

    uint256[50] private __gap;
}
abstract contract ReentrancyGuardUpgradeable is Initializable {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    function __ReentrancyGuard_init() internal initializer {
        __Initializable_init();
        _status = _NOT_ENTERED;
    }

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        _status = _ENTERED;

        _;

        _status = _NOT_ENTERED;
    }
}
abstract contract PausableUpgradeable is Initializable {
    event Paused(address account);
    event Unpaused(address account);

    bool private _paused;

    function __Pausable_init() internal initializer {
        __Initializable_init();
        _paused = false;
    }

    /**
     * @dev Returns true if the contract is paused, and false otherwise.
     */
    function paused() public view returns (bool) {
        return _paused;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is not paused.
     */
    modifier whenNotPaused() {
        require(!paused(), "Pausable: paused");
        _;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is paused.
     */
    modifier whenPaused() {
        require(paused(), "Pausable: not paused");
        _;
    }

    /**
     * @dev Triggers stopped state.
     */
    function _pause() internal virtual whenNotPaused {
        _paused = true;
        emit Paused(msg.sender);
    }

    /**
     * @dev Returns to normal state.
     */
    function _unpause() internal virtual whenPaused {
        _paused = false;
        emit Unpaused(msg.sender);
    }
}
/**
 * @dev Provides safe mathematical operations to prevent overflow and underflow.
 */
library SafeMathUpgradeable {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on overflow.
     * 
     * Counterpart to Solidity's `+` operator.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        unchecked {
            uint256 c = a + b;
            require(c >= a, "SafeMath: addition overflow");
            return c;
        }
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on underflow.
     * 
     * Counterpart to Solidity's `-` operator.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        unchecked {
            require(b <= a, "SafeMath: subtraction underflow");
            return a - b;
        }
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on overflow.
     * 
     * Counterpart to Solidity's `*` operator.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        unchecked {
            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
            // benefit is lost if 'b' is also tested.
            if (a == 0) {
                return 0;
            }
            uint256 c = a * b;
            require(c / a == b, "SafeMath: multiplication overflow");
            return c;
        }
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting on division by zero.
     * 
     * Counterpart to Solidity's `/` operator. Note that this function uses Solidity's
     * `revert` statement when dividing by zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        unchecked {
            require(b > 0, "SafeMath: division by zero");
            return a / b;
        }
    }

    /**
     * @dev Returns the modulo of dividing two unsigned integers, reverting on division by zero.
     * 
     * Counterpart to Solidity's `%` operator. Note that this function uses Solidity's
     * `revert` statement when dividing by zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        unchecked {
            require(b > 0, "SafeMath: modulo by zero");
            return a % b;
        }
    }
}




contract FIPCOINStaking is Initializable, OwnableUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, UUPSUpgradeable {
    using SafeMathUpgradeable for uint256;

    IERC20Upgradeable public Fipcoin;
    IERC20Upgradeable public USDT;
    uint256 public stakingPool;
    address[] public stakerAddresses;

    struct Staker {
        uint256 stakedAmount;
        uint256 rewardAmount;
        uint256 startTime;
        uint256 lastRewardTime;
        uint256 lockPeriod;
        bool claimed;
    }

    mapping(address => Staker) public stakers;

    uint256 public tokenPrice;
  
    
    uint256 public LOCK_PERIOD_360_DAYS;
    
    uint256 public REWARD_RATE_1000_10999;
    uint256 public REWARD_RATE_11000_99999;
    uint256 public REWARD_RATE_100000_999999;
    uint256 public REWARD_RATE_1000000_2499999;
    uint256 public REWARD_RATE_2500000_499999;
    uint256 public REWARD_RATE_50000000;



    uint256 public PENALTY_RATE;
    uint256 public REWARD_INTERVAL;

    address public feeTaker;


function initialize(IERC20Upgradeable _Fipcoin, address feeTake, address _usdt) public initializer {
    require(msg.sender == tx.origin, "Only deployer can initialize"); // Only deployer can initialize
    
    __Ownable_init();
    __ReentrancyGuard_init();
    __UUPSUpgradeable_init();
    __Pausable_init();
    Fipcoin = _Fipcoin;

    // Initialize default values
    LOCK_PERIOD_360_DAYS = 360 * 24 * 3600;


    PENALTY_RATE = 5;
    REWARD_INTERVAL = 3600;
    USDT = IERC20Upgradeable(_usdt);
    feeTaker = feeTake;
}




function updateUSDT(address _usdt)external onlyOwner{
      USDT = IERC20Upgradeable(_usdt);
}

function updateFeeTaker(address _feeTaker) external onlyOwner{
    feeTaker = _feeTaker;
}

function updateFipcoin(address _fipcoin) external onlyOwner{
    Fipcoin = IERC20Upgradeable(_fipcoin);
}


     function updateLockPeriods(
        uint256 _lockPeriod360Days
    ) external onlyOwner {
        LOCK_PERIOD_360_DAYS = _lockPeriod360Days;
        
    }

    function updateRewardRates(
        uint256 _REWARD_RATE_1000_10999,
        uint256 _REWARD_RATE_11000_99999,
        uint256 _REWARD_RATE_100000_999999,
        uint256 _REWARD_RATE_1000000_2499999,
        uint256 _REWARD_RATE_2500000_499999,
        uint256 _REWARD_RATE_50000000
    ) external onlyOwner {
     REWARD_RATE_1000_10999 = _REWARD_RATE_1000_10999;
     REWARD_RATE_11000_99999 = _REWARD_RATE_11000_99999;
     REWARD_RATE_100000_999999 = _REWARD_RATE_100000_999999;
     REWARD_RATE_1000000_2499999 = _REWARD_RATE_1000000_2499999;
     REWARD_RATE_2500000_499999 = _REWARD_RATE_2500000_499999;
     REWARD_RATE_50000000 = _REWARD_RATE_50000000;

    }

    // Update penalty rate
    function updatePenaltyRate(uint256 _penaltyRate) external onlyOwner {
        PENALTY_RATE = _penaltyRate;
    }

    // Update reward interval
    function updateRewardInterval(uint256 _rewardInterval) external onlyOwner {
        REWARD_INTERVAL = _rewardInterval;
    }
   function updateTokenPrice(uint256 _tokenPrice) external onlyOwner {
        tokenPrice = _tokenPrice;
    }



    event Staked(address indexed user, uint256 amount, uint256 lockPeriod);
    event Withdrawn(address indexed user, uint256 stakedAmount, uint256 rewardAmount, bool earlyWithdrawal);
    event RewardDistributed(address indexed user, uint256 rewardAmount);
    event BuyToken(address indexed user, uint256 amount);



   uint256 public p1;
   uint256 public p2;
   uint256 public p3;
   uint256 public p4;
   uint256 public p5;
   uint256 public p6;

   function update_Price(uint256 _p1, uint256 _p2, uint256 _p3, uint256 _p4 , uint256 _p5, uint256 _p6)public onlyOwner{
    p1=_p1;
    p2=_p2;
    p3=_p3;
    p4=_p4;
    p5=_p5;
    p6=_p6;
   }


 function buyToken(uint256 usdtAmount) external {
        require(usdtAmount > 0, "Amount must be greater than 0");
        
        
           if(usdtAmount > 0 && usdtAmount <= 10999 ){
             tokenPrice = p1;
           }else if(usdtAmount >= 11000  && usdtAmount <= 99999 ){
              tokenPrice = p2;
            
           }else if(usdtAmount >= 100000 && usdtAmount <= 999999 ){
            tokenPrice = p3;
           }else if(usdtAmount >= 1000000 && usdtAmount <= 2499999 ){
            tokenPrice = p4;
           }else if(usdtAmount >= 2500000 && usdtAmount <= 4999999 ){
            tokenPrice = p5;
           }else if(usdtAmount >= 5000000  ){
            tokenPrice = p6;
           }

        uint256 tokenAmount = (usdtAmount * 10**18) / tokenPrice;
        require(Fipcoin.balanceOf(address(this)) >= tokenAmount, "Not enough tokens in contract");
        require(USDT.transferFrom(msg.sender, feeTaker, usdtAmount), "USDT transfer failed");

        require(Fipcoin.transfer(msg.sender, tokenAmount), "Token transfer failed");
        emit BuyToken(msg.sender, usdtAmount);
    }




    modifier canWithdraw(address _staker) {
        require(
            block.timestamp >= stakers[_staker].startTime + stakers[_staker].lockPeriod,
            "Tokens are still locked"
        );
        _;
    }

  

    // Pause the contract for emergency
    function pause() external onlyOwner {
        _pause();
    }

    // Unpause the contract
    function unpause() external onlyOwner {
        _unpause();
    }

    // Staking function with pause check
    function stake(uint256 _amount, uint256 _lockPeriod) external nonReentrant whenNotPaused {
        require(_amount > 0, "Amount must be greater than 0");
        require(Fipcoin.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
       
        require(
             _lockPeriod == LOCK_PERIOD_360_DAYS,
            "Invalid lock period"
        );
        require(stakers[msg.sender].stakedAmount == 0, "Already staked");


        stakers[msg.sender] = Staker({
            stakedAmount: _amount,
            rewardAmount: 0,
            startTime: block.timestamp,
            lastRewardTime: block.timestamp,
            lockPeriod: _lockPeriod,
            claimed: false
        });

        stakerAddresses.push(msg.sender);
        stakingPool = stakingPool.add(_amount);

        emit Staked(msg.sender, _amount, _lockPeriod);
    }

  function calculateRewards(address _staker) internal view returns (uint256) {
    Staker memory staker = stakers[_staker];
    
    uint256 elapsedPeriods = (block.timestamp - staker.lastRewardTime) / REWARD_INTERVAL;
    uint256 rewardRate;
    uint256 lockDurationInHours;
    
    if (staker.lockPeriod == LOCK_PERIOD_360_DAYS) {
           if(staker.stakedAmount >= 1 && staker.stakedAmount <= 10999 ){
             rewardRate = REWARD_RATE_1000_10999;
           }else if(staker.stakedAmount >= 11000  && staker.stakedAmount <= 99999 ){
              rewardRate = REWARD_RATE_11000_99999;
            
           }else if(staker.stakedAmount >= 100000 && staker.stakedAmount <= 999999 ){
            rewardRate = REWARD_RATE_100000_999999;
           }else if(staker.stakedAmount >= 1000000 && staker.stakedAmount <= 2499999 ){
            rewardRate = REWARD_RATE_1000000_2499999;
           }else if(staker.stakedAmount >= 2500000 && staker.stakedAmount <= 4999999 ){
            rewardRate = REWARD_RATE_2500000_499999;
           }else if(staker.stakedAmount >= 5000000  ){
            rewardRate = REWARD_RATE_50000000;
           }

        lockDurationInHours = 360 * 24;     
    }

    uint256 hourlyRewardRate = rewardRate  / lockDurationInHours;

    return (staker.stakedAmount * hourlyRewardRate * elapsedPeriods) / 1e20; 
}



 function calculateRewardsPerUser(address _staker) public view returns (uint256) {
    Staker memory staker = stakers[_staker];
    
    uint256 elapsedPeriods = (block.timestamp - staker.lastRewardTime) / REWARD_INTERVAL;
    uint256 rewardRate;
    uint256 lockDurationInHours;
    
    if (staker.lockPeriod == LOCK_PERIOD_360_DAYS) {
           if(staker.stakedAmount >= 1 && staker.stakedAmount <= 10999 ){
             rewardRate = REWARD_RATE_1000_10999;
           }else if(staker.stakedAmount >= 11000  && staker.stakedAmount <= 99999 ){
              rewardRate = REWARD_RATE_11000_99999;
            
           }else if(staker.stakedAmount >= 100000 && staker.stakedAmount <= 999999 ){
            rewardRate = REWARD_RATE_100000_999999;
           }else if(staker.stakedAmount >= 1000000 && staker.stakedAmount <= 2499999 ){
            rewardRate = REWARD_RATE_1000000_2499999;
           }else if(staker.stakedAmount >= 2500000 && staker.stakedAmount <= 4999999 ){
            rewardRate = REWARD_RATE_2500000_499999;
           }else if(staker.stakedAmount >= 5000000  ){
            rewardRate = REWARD_RATE_50000000;
           }

        lockDurationInHours = 360 * 24;     
    }

    uint256 hourlyRewardRate = rewardRate / lockDurationInHours;

    return (staker.stakedAmount * hourlyRewardRate * elapsedPeriods) / 1e20; 
}


    // Function to withdraw after lock period
    function withdraw() external nonReentrant canWithdraw(msg.sender) {
        Staker storage staker = stakers[msg.sender];
        require(staker.stakedAmount > 0, "No staked tokens");
        require(!staker.claimed, "Already withdrawn");

        uint256 stakedAmount = staker.stakedAmount;
        uint256 rewardAmount = staker.rewardAmount + calculateRewards(msg.sender);

        staker.claimed = true;
        stakingPool = stakingPool.sub(stakedAmount);
         require(Fipcoin.transfer(msg.sender, stakedAmount.add(rewardAmount)), "Transfer failed");
            staker.stakedAmount = 0;
            staker.rewardAmount = 0;
            staker.startTime = 0;
            staker.lastRewardTime = 0;
            staker.lockPeriod = 0;

        emit Withdrawn(msg.sender, stakedAmount, rewardAmount, false);
    }

    // Early withdrawal with penalty
    function earlyWithdraw() external nonReentrant {
        Staker storage staker = stakers[msg.sender];
        require(staker.stakedAmount > 0, "No staked tokens");
        require(!staker.claimed, "Already withdrawn");

        uint256 stakedAmount = staker.stakedAmount;
        uint256 rewardAmount = staker.rewardAmount + calculateRewards(msg.sender);

        uint256 penalty = rewardAmount.mul(PENALTY_RATE).div(100);
        rewardAmount = rewardAmount.sub(penalty);
        staker.claimed = true;
        stakingPool = stakingPool.sub(stakedAmount);

         require(Fipcoin.transfer(msg.sender, stakedAmount.add(rewardAmount)), "Transfer failed");
            staker.stakedAmount = 0;
            staker.rewardAmount = 0;
            staker.startTime = 0;
            staker.lastRewardTime = 0;
            staker.lockPeriod = 0;

        emit Withdrawn(msg.sender, stakedAmount, rewardAmount, true);
    }


    // Manually fund the staking pool
    function fundPool(uint256 _amount) external onlyOwner {
    require(Fipcoin.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        stakingPool = stakingPool.add(_amount);
    }

    // Get staker information
    function viewStakerInfo(address _staker) external view returns (uint256 stakedAmount, uint256 rewardAmount, uint256 lockPeriod, uint256 timeRemaining) {
        Staker memory staker = stakers[_staker];
        stakedAmount = staker.stakedAmount;
        rewardAmount = staker.rewardAmount + calculateRewards(_staker);
        lockPeriod = staker.lockPeriod;
        timeRemaining = (staker.startTime + staker.lockPeriod) > block.timestamp ? (staker.startTime + staker.lockPeriod) - block.timestamp : 0;
    }




 // Get all stakers' information at once
function getAllStakers() external view returns (address[] memory, uint256[] memory, uint256[] memory, bool[] memory) {
    uint256 length = stakerAddresses.length;
    
    // Initialize arrays for storing all staker data
    address[] memory addresses = new address[](length);
    uint256[] memory stakedAmounts = new uint256[](length);
    uint256[] memory rewardAmounts = new uint256[](length);
    bool[] memory claimedStatuses = new bool[](length);

    // Loop through all staker addresses
    for (uint256 i = 0; i < length; i++) {
        address stakerAddress = stakerAddresses[i];
        Staker memory staker = stakers[stakerAddress];

        addresses[i] = stakerAddress;
        stakedAmounts[i] = staker.stakedAmount;
        rewardAmounts[i] = staker.rewardAmount + calculateRewards(stakerAddress);
        claimedStatuses[i] = staker.claimed;
    }

    // Return all stakers' details
    return (addresses, stakedAmounts, rewardAmounts, claimedStatuses);
}


    // Get total staked amount
    function getTotalStaked() external view returns (uint256) {
        return stakingPool;
    }

    // Get total rewards distributed
    function getTotalRewardsDistributed() external view returns (uint256) {
        uint256 totalRewards;
        for (uint256 i = 0; i < stakerAddresses.length; i++) {
            totalRewards = totalRewards.add(calculateRewards(stakerAddresses[i]));
        }
        return totalRewards;
    }

    // Authorize upgrades
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}