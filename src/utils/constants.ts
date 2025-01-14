// Uniswap V2 Factory (event: PairCreated)
export const ABI_UniswapV2Factory = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address"
      },
      { indexed: true, internalType: "uint24", name: "fee", type: "uint24" },
      {
        indexed: false,
        internalType: "int24",
        name: "tickSpacing",
        type: "int24"
      },
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "PoolCreated",
    type: "event"
  }
];
