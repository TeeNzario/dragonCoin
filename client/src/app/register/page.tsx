'use client'

import Link from 'next/link'

export default function Register() {
    return (
        <div className="h-screen relative bg-[#F5AB3E]">
            <div className="h-full w-full relative flex items-center justify-center">
                <div className="h-[57%] w-[60%] relative flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-white">WELCOME TO</h1>
                    <h1 className="text-3xl font-bold text-white">DRAGON COIN</h1>
                    <div className="h-[80%] w-full pt-5 flex flex-col gap-5 items-center justify-center bg-[#FFFAEA] rounded-4xl mt-5 overflow-auto">
                        <input type="text" placeholder="Username" className="w-[80%] px-3 rounded-xl bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F5AB3E]" />
                        <input type="text" placeholder="Email" className="w-[80%] px-3 rounded-xl bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F5AB3E]" />
                        <input type="password" placeholder="Password" className="w-[80%] px-3 rounded-xl bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F5AB3E]" />
                        <input type="password" placeholder="Confirm Password" className="w-[80%] px-3 rounded-xl bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F5AB3E]" />
                        <button className="w-[80%] p-2 bg-[#B5601D] rounded-xl text-white font-bold cursor-pointer hover:bg-[#8a4a16] transition-colors">Register</button>
                        <p className="text-[0.7rem] text-center text-[#B5601D]">Already have an account? <Link href="/login" className="text-[#F5AB3E] cursor-pointer hover:text-gray-700 transition-colors">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}