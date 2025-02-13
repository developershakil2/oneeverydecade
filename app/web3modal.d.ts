declare module "@web3modal/react" {
    export const Web3Modal: React.FC<{
      projectId: string;
      ethereumClient: {
        wagmi: any;
        chains: any[];
      };
      theme?: string;
    }>;
  }
  