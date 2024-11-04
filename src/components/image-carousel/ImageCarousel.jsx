import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ImageCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const maxVisibleImages = 4;
  const extraImages = images.length - maxVisibleImages;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
        onClick={() => openModal(currentIndex)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].altText || "Imagen del producto"}
          className="w-full h-full object-cover"
        />

        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 p-2 rounded-e-full transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}>
            <ChevronLeft className="text-white" />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 p-2 rounded-l-full transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}>
            <ChevronRight className="text-white" />
          </button>
        )}
      </div>

      <div className="flex space-x-2 mt-4">
        {images.slice(0, maxVisibleImages).map((image, index) => (
          <div
            key={index}
            className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500"
            onClick={() => {
              setCurrentIndex(index);
              if (index === maxVisibleImages - 1 && extraImages > 0) {
                openModal(index);
              }
            }}>
            <img
              src={image.url}
              alt={image.altText || `Imagen ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {index === maxVisibleImages - 1 && extraImages > 0 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-lg font-bold">
                +{extraImages}
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}>
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold"
            onClick={closeModal}>
            <X />
          </button>
          <div
            className="relative w-full max-w-2xl h-96 bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            {currentIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={prevImage}>
                <ChevronLeft />
              </button>
            )}
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].altText || `Imagen ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
            {currentIndex < images.length - 1 && (
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={nextImage}>
                <ChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
