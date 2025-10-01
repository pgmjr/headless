"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const HeroBannerSlider = ({ slides }: { slides: Slide[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={classNames(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            {
              "opacity-100 z-10": index === current,
              "opacity-0 z-0": index !== current,
            }
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width="1280"
            height="585"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl text-[#F6EBD3] [text-shadow:0px_0px_8px_#000] md:text-6xl font-extrabold mb-2">{slide.title}</h1>
              <p className="text-lg md:text-2xl font-medium">{slide.subtitle}</p>
            </div>
          </div>
        </div >
      ))}
    </div >
  );
}

export default HeroBannerSlider;
