import {headers} from 'next/headers'
import WagmiProvider from "@/app/components/WagmiProvider";
import Header from './components/Header'
import Punch from "./components/Punch"


export default function Home() {
  return (
    <WagmiProvider cookie={headers().get('cookie')!}>
      <div className="m-h-full">
        <Header />
        <Punch />
      </div>
    </WagmiProvider>

  );
}

