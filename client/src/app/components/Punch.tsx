'use client'
import { useWriteContract } from 'wagmi'
import abi from '../../../../build/contracts/PunchCard.json'

export default function Punch(){

  const { writeContract } = useWriteContract();

  async function handlePunch(){
    console.log('test')
    const a = await writeContract({
      abi: abi.abi,
      address: '0x3e0eCCaCB5480DFdf3dEB3c397485A4EE9Ad8E55',
      functionName: 'punch',
    },{
      onError: (...error) => {
        console.log('error', error)
      }
    })

    console.log(a);
  }

  return <div>
    <button onClick={handlePunch} className="hover:bg-white/80 px-10 h-10 bg-white rounded-lg text-center text-black mx-auto mt-20 block">Click</button>
  </div>
}
