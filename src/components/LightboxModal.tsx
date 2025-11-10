interface LightboxModalProps {
  image: string
  onClose: () => void
}

const LightboxModal = ({ image, onClose }: LightboxModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Lightbox"
        className="max-w-[90%] max-h-[85vh] rounded-lg shadow-lg"
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white text-3xl font-bold"
      >
        ×
      </button>
    </div>
  )
}

export default LightboxModal
