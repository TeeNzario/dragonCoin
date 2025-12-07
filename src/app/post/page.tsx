'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Post() {
  return (
    <div className="h-screen relative bg-[#FFFAEA]">
        <div className="h-full w-full relative flex items-center justify-center">
            <div className="h-[80%] w-[80%] relative bg-white rounded-2xl">
             <div className="absolute flex items-center justify-center right-3 bottom-3 w-[3rem] h-[3rem] bg-[#F5AB3E] rounded-full hover:scale-110 transition-all duration-160 ease-in-out cursor-pointer">
                {/* Add Post Button */}
                <Link href="/" className="flex items-center justify-center">
                    <Image src="/images/plus_icon.png" alt="plus_img" width={20} height={20} />
                </Link>
            </div>              
            </div>
       </div>
        <div className="absolute flex items-center justify-center left-12 bottom-8 w-[8rem] h-[3rem] bg-[#F5AB3E] rounded-full hover:scale-110 transition-all duration-160 ease-in-out cursor-pointer">
                <Link href="/" className="flex items-center justify-center">
                    <p className="text-white font-bold text-center text-[1.5rem]">BACK</p>
                </Link>
        </div>
   </div>
  )
}
