"use client"
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../lib/sanity";

function ImageGallery({ images }) {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image) => {
    setBigImage(image)
  }

  return (
    <div className="grid mb-12 gap-4 lg:grid-cols-4">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col ">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={300}
              height={300}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer hover:opacity-50"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className=" relative w-80 overflow-hidden rounded-lg bg-gray-100 lg:col-span-1">
        <Image
          src={urlFor(bigImage).url()}
          alt="big photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}

export default ImageGallery;
