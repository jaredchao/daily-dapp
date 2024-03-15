"use client"

import { useConnect, useChainId, useDisconnect, useEnsName, useAccount, useEnsAvatar } from 'wagmi'
import { 
  useWaitForTransactionReceipt, 
  useWriteContract,
  useReadContract
} from 'wagmi'

import abi from '../../../../build/contracts/PunchCard.json'
export default function MintNFT() {

  const { address } = useAccount()

  const result = useReadContract({
    abi:abi.abi,
      address: '0xEE021F4c3f7D0F91F9F350FAb533bfef02b84883',
    functionName: 'pay',
    args: ['0xdCaba37F87Ceb795A0C6B8145C4068C2322A6435']
  })

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement)
    await result.refetch()
    console.log(result.data)
  } 
  return (
    <form onSubmit={submit}>
      
      <button 
        type="submit"
      >
        {result.fetchStatus === 'fetching' ? 'pending...' : 'Mint'} 
      </button>
    </form>
  )
}
