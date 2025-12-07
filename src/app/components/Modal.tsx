'use client'

import React, { useEffect, useState } from 'react'

interface ModalProps {
    isOpen: boolean,
    onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {

    if (!isOpen) return null;


  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-orange-50/50 backdrop-blur-sm">
        <div className="relative bg-[#1E1E1E] rounded-2xl px-6 py-18 w-[90%] max-w-lg shadow-xl">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white font-bold hover:text-gray-700 transition-colors"
            >
                ✕
            </button>
            <div className="flex flex-col gap-4">
                <input 
                    type="text"
                    placeholder="TOPIC"
                    className="w-full h-15 p-5 bg-white rounded-xl font-bold text-[1.2rem] focus:outline-none focus:ring-2 focus:ring-[#F5AB3E]"
                />
                <textarea 
                    className="w-full h-55 p-5 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5AB3E]"
                    placeholder="MESSAGE"
                />
                <button 
                    className="w-full py-3 bg-[#F5AB3E] text-white text-[1.5rem] font-bold rounded-3xl hover:bg-[#8a4a16] transition-colors"
                >
                    SEND
                </button>
            </div>
        </div>
    </div>  
  )
}
