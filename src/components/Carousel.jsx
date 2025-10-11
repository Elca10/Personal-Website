import React, { useState, useRef, useEffect } from 'react'

export default function Carousel({ images = [], maxWidth = 640, onImageClick = null }) {
  const [i, setI] = useState(0)
  const [aspect, setAspect] = useState(16 / 9)
  const imgRef = useRef(null)

  if (!images.length) return null

  useEffect(() => {
    const img = new Image()
    img.src = images[0]
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) setAspect(img.naturalWidth / img.naturalHeight)
    }
  }, [images])

  const paddingBottom = `${100 / aspect}%` // container uses padding-bottom to reserve aspect ratio

  return (
    <div className="relative mx-auto" style={{ maxWidth }}>
      <div style={{ position: 'relative', paddingBottom }}>
        <img
          ref={imgRef}
          src={images[i]}
          alt={`slide-${i}`}
          className="absolute inset-0 w-full h-full object-contain rounded-lg cursor-zoom-in"
          style={{ position: 'absolute', top: 0, left: 0 }}
          onClick={() => onImageClick && onImageClick(images[i])}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={() => setI((i - 1 + images.length) % images.length)} className="bg-black/50 p-2 rounded">◀</button>
        <button onClick={() => setI((i + 1) % images.length)} className="bg-black/50 p-2 rounded">▶</button>
      </div>
    </div>
  )
}
