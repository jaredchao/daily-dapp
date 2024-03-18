import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { sepolia } from 'wagmi/chains'
import { defineChain } from 'viem'
import {
  cookieStorage,
  createStorage,
} from "wagmi";

export const wagmiConfig = getDefaultConfig({
  appName: 'Daily-Dapp',
  projectId: '836f0f421c627a4ecc339b01a8486fa9',
  chains: [
    sepolia,
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
