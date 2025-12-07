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
        <div className="relative bg-white rounded-2xl p-6 w-[90%] max-w-lg shadow-xl animate-in fade-in zoom-in duration-200">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
                ✕
            </button>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-[#B5601D]">Create New Post</h2>
                <textarea 
                    className="w-full h-32 p-3 border-2 border-[#F5AB3E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5601D]"
                    placeholder="What's on your mind?"
                />
                <button 
                    className="w-full py-3 bg-[#B5601D] text-white font-bold rounded-xl hover:bg-[#8a4a16] transition-colors"
                >
                    Post
                </button>
            </div>
        </div>
    </div>  
  )
}
