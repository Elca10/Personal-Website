const isVideo = (src) => /\.(mov|mp4|webm|MOV|MP4)$/i.test(src)

export default function Lightbox({ src, alt, onClose }) {
  if (!src) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      {isVideo(src) ? (
        <video
          src={src}
          controls
          autoPlay
          className="max-w-[90%] max-h-[90%]"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img src={src} alt={alt} className="max-w-[90%] max-h-[90%] object-contain" onClick={(e) => e.stopPropagation()} />
      )}
    </div>
  )
}
