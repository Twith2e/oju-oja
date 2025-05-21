"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImagePreview({
  image,
}: {
  image: Array<string>;
}) {
  const [currentImage, setCurrentImage] = useState<string>(image[0]);
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#f3f4f6] rounded-lg flex items-center justify-center h-110">
        <Image
          src={currentImage}
          width={300}
          height={300}
          alt={image[0]}
          onLoad={loading ? () => setLoading(false) : undefined}
        />
        {loading && (
          <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
        )}
      </div>
      <div className="flex gap-3">
        {image.map((img, index) => (
          <button
            className={`bg-[#f9fafb] hover:ring-1 hover:ring-[#3c50e0] cursor-pointer rounded-lg ${
              currentImage === img && "ring-[#3c50e0] ring-2"
            }`}
            onClick={() => setCurrentImage(img)}
            key={index}
          >
            <Image src={img} width={100} height={100} alt={img} />
          </button>
        ))}
      </div>
    </div>
  );
}
