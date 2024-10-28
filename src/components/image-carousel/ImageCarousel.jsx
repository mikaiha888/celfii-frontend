import { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const maxVisibleImages = 4;
  const extraImages = images.length - maxVisibleImages;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={selectedImage.url}
          alt={selectedImage.altText || "Imagen del producto"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex space-x-4">
        {images.slice(0, maxVisibleImages).map((image, index) => (
          <div
            key={index}
            className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500"
            onClick={() => setSelectedImage(image)}>
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
    </div>
  );
};

export default ImageCarousel;
