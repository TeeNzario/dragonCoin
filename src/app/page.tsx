import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen bg-[#FFFAEA]">
      <div className="absolute top-5 right-5 flex items-center justify-center bg-[#F5AB3E] border border-[#F5DE93] w-[5rem] h-[2em] rounded-full">
        <p className="text-white font-bold text-end w-full mr-4">999</p>
      </div>
         <div className="container w-full h-full flex flex-col items-center justify-center">
          <Image src="/images/main_character.png" alt="dragon_img" width={160} height={160} />
          <p className="text-2xl font-bold text-[#B5601D] mt-5">Click on the dragon!</p>
         </div>
   </div>
  )
}
