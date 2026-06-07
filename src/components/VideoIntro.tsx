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
            {/* Placeholder for actual video embed */}
            <div className="w-full h-full flex flex-col items-center justify-center text-muted">
              <span className="text-4xl mb-4">▶</span>
              <p>Video intro coming soon</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
