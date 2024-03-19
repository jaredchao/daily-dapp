'use client'
import { useWriteContract, useAccount } from 'wagmi'
import { useUser } from '@/hooks/useUser'

import abi from '@/abi/PunchCard.json'

export default function Punch(){

  const { withAutoLogin } = useUser();

  const { writeContract } = useWriteContract();

  const handlePunch = withAutoLogin(() => {
    punch()
  })

  async function punch(){
    await writeContract({
      abi: abi.abi,
      address: '0xEDCEfDD6555cEAFC7566E4a24b5091413AfBa55b',
      functionName: 'punch',
    }, {
      onError: (error) => {
        alert((error.cause as any).reason ?? error.message)
      },
      onSuccess: () => {
        alert('success')
      }
    })
  }


  return <div className="gap-x-2">
    <button onClick={handlePunch} className="hover:bg-white/80 px-10 h-10 bg-white rounded-lg text-center text-black mx-auto mt-20 block">Click</button>
  </div>
}
