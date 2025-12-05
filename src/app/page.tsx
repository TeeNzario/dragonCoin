'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [pop, setPop] = useState(false); 
  const [coin, setCoin] = useState(0);

  const hadleClick = () => {
    console.log('clicked')
      setPop(true)

    setTimeout(() => {
      setPop(false)
    }, 100)

    setCoin(coin + 116)
  }
  return (
    <div className="h-screen bg-[#FFFAEA]">
      <div className="absolute top-5 right-5 flex items-center justify-center bg-[#F5AB3E] border border-[#F5DE93] w-[5rem] h-[2em] rounded-full">
        <Image className="absolute top-[-0.6rem] left-[-1.8rem]" src="/images/coin_icon.png" alt="coin_img" width={45} height={45} />
        <p className="text-white font-bold text-end w-full mr-4">{coin}</p>
      </div>
      <div className="container w-full h-full flex flex-col items-center justify-center">
          <button onClick={hadleClick}>
            <Image className={pop ? "scale-110 transition-all duration-50 ease-in-out" : "scale-100 transition-all duration-50 ease-in-out"} src="/images/main_character.png" alt="dragon_img" width={160} height={160} />
          </button>
          <p className="text-2xl font-bold text-[#B5601D] mt-5">Click on the dragon!</p>
         </div>
   </div>
  )
}
