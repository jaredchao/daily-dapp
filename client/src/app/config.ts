import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { defineChain } from 'viem'
import {
  cookieStorage,
  createStorage,
} from "wagmi";
// 0x8B67019fc9Adf2E2f56C7179CdB2113FAe3cbfE4
export const dailyChain = defineChain({
  id: 5,
  name: 'Daily',
  rpcUrls: {
    default: { http: ['https://goerli.infura.io/v3/c141ecde53b248289fd54f093a67d8f0'] }
  },
  blockExplorers: {
    default: { name: 'Daily', url: 'https://goerli.etherscan.io/' }
  },
  contracts: {
    multicall3: {
      address: '0x8B67019fc9Adf2E2f56C7179CdB2113FAe3cbfE4',
    },
  },
  testnet:true,
  nativeCurrency: {
    name: 'Daily',
    symbol: 'DKB',
    decimals: 18
  }
})

export const localChain = defineChain({
  id: 1337,
  name: 'Localhost',
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] }
  },
  contracts: {
    multicall3: {
      address: '0x3e0eccacb5480dfdf3deb3c397485a4ee9ad8e55',
    },
  },
  testnet:true,
  nativeCurrency: {
    name: 'Daily',
    symbol: 'DKB',
    decimals: 18
  }
})

export const wagmiConfig = getDefaultConfig({
  appName: 'Daily-Dapp',
  projectId: '836f0f421c627a4ecc339b01a8486fa9',
  chains: [
    dailyChain,
    localChain
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
