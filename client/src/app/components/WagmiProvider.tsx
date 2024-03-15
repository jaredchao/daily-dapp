'use client'
import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cookieToInitialState } from 'wagmi' 
import { type State, WagmiProvider } from 'wagmi'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { wagmiConfig } from '@/app/config'

type Props = {
  children: ReactNode,
  cookie: string
}

const queryClient = new QueryClient()
export default function Providers({ children, cookie }: Props)  {  
  const initialState = cookieToInitialState( 
    wagmiConfig, 
    cookie
  )

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}> 
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
