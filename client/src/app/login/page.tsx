'use client'    
import Link from 'next/link'

export default function Login() {
    return (
        <div className="h-screen relative bg-[#F5AB3E]">
            <div className="h-full w-full relative flex items-center justify-center">
                <div className="h-[57%] w-[60%] relative flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-white">WELCOME TO</h1>
                    <h1 className="text-3xl font-bold text-white">DRAGON COIN</h1>
                    <div className="h-[50%] w-full pt-5 flex flex-col gap-5 items-center justify-center bg-[#FFFAEA] rounded-4xl mt-5 overflow-auto">
                        <input type="text" placeholder="Username" className="w-[80%] px-3 rounded-xl bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F5AB3E]" />
                        <div className="w-[80%] flex flex-col gap-1 justify-between">
                            <input type="password" placeholder="Password" className="w-full px-3 rounded-xl bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F5AB3E]" />
                            <button className="text-[0.7rem] text-end text-[#B5601D] cursor-pointer hover:text-gray-700 transition-colors">forgot password?</button>
                        </div>
                        <button className="w-[80%] p-2 bg-[#B5601D] rounded-xl text-white font-bold cursor-pointer hover:bg-[#8a4a16] transition-colors">Login</button>
                        <p className="text-[0.7rem] text-center text-[#B5601D]">Don't have an account? <Link href="/register" className="text-[#F5AB3E] cursor-pointer hover:text-gray-700 transition-colors">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}