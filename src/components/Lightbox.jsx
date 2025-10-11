import React from 'react'

export default function Lightbox({ src, alt, onClose }) {
  if (!src) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <img src={src} alt={alt} className="max-w-[90%] max-h-[90%] object-contain" />
    </div>
  )
}
