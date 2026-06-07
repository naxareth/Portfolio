'use client'

import { useState } from 'react'

export default function VideoIntro() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-muted transition-colors mt-6"
      >
        <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-surface">
          ▶
        </span>
        Watch intro
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden border border-border">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/50 backdrop-blur-md rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              ✕
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/IUfA_J4eES0?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}
