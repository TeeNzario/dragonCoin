'use client'
import Image from 'next/image'
import Link from 'next/link'
import MessageCard from '../components/MessageCard'
import Modal from '../components/Modal'
import { useState } from 'react'

interface Message {
  id: number;
  topic: string;
  message: string;
}

export default function Post() {
    const [modalOpen, setModalOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    const handleAddMessage = (topic: string, message: string) => {
        setMessages(prev => [
        ...prev,
        { id: Date.now(), topic, message }
        ]);
    };
    
    
  return (
    <div className="h-screen relative bg-[#FFFAEA]">
        <div className="h-full w-full relative flex items-center justify-center">
            <div className="h-[80%] w-[80%] relative">
                <div className="h-full w-full pt-5 flex flex-col gap-5 items-center bg-white rounded-2xl overflow-auto">
                    {/* posts */}
                    {messages.length === 0 ? (
                        <p className="text-gray-500 text-center">No messages yet.</p>
                    ) : (
                        messages.map((msg) => (
                            <MessageCard key={msg.id} topic={msg.topic} message={msg.message} />
                        ))
                    )}
                </div>
            </div>
       </div>
        <div className="absolute flex items-center justify-center left-12 bottom-8 w-[8rem] h-[3rem] bg-[#B5601D] rounded-full hover:scale-110 transition-all duration-160 ease-in-out cursor-pointer">
            <Link href="/" className="flex items-center justify-center">
                <p className="text-white font-bold text-center text-[1.5rem]">BACK</p>
            </Link>
        </div>
        {/* Add Post Button */}
        <div className="absolute flex items-center justify-center right-6 bottom-6 w-[5rem] h-[5rem] bg-[#1E1E1E] rounded-full hover:scale-110 transition-all duration-160 ease-in-out cursor-pointer">
            <button onClick={() => setModalOpen(true)} className="flex items-center justify-center">
                <Image src="/images/plus_icon.png" alt="plus_img" width={30} height={30} />
            </button>
        </div>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddMessage} />
  </div>
  )
}
