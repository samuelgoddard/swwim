import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import Image from "next/image";
import image from "next/image";
import ImageWrapper from "../helpers/image-wrapper";

export default function CaseCarousel({ images }) {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="w-full h-full object-cover max-h-screen">
      <div className="h-full">
        <div className="embla h-full">
          <div className="relative h-full">
            <div className="embla__viewport h-full" ref={viewportRef}>
            <div className="embla__container ml-0 md:ml-0 h-full">
                {images.map((image, i) => {
                  return (
                  <div className="embla__slide px-0 bg-blue text-white w-full min-w-full h-full" key={i}>
                    <div className="w-full min-w-full h-full">
                      <ImageWrapper
                        image={image}
                        className="w-full h-full object-cover object-center case-image"
                        baseWidth={420}
                        baseHeight={720}
                        fill={true}
                      />
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>        

            <div className="absolute bottom-0 left-0 md:left-auto md:right-0 flex mx-[25px] md:mx-[50px] mb-[25px] md:mb-[50px] space-x-4 z-50">
              <button
                className={`w-10 lg:w-16 h-10 lg:h-16 focus:border-none focus:outline-none rounded-full flex items-center justify-center bg-blue text-white transform transition ease-in-out duration-500 relative overflow-hidden ${!prevBtnEnabled ? 'opacity-50' : 'hover:scale-110 group' }`}
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <svg className="w-4 h-4 relative z-10" viewBox="137.718 -1.001 366.563 644">
                  <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" fill="currentColor" />
                </svg>
                
                <span className="absolute inset-0 flex flex-wrap z-1 items-center justify-center">
                  <span className="w-0 h-0 rounded-full bg-black group-hover:w-full group-hover:h-full transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 transform scale-110"></span>
                </span>
              </button>
              
              <button
                className={`w-10 lg:w-16 h-10 lg:h-16 focus:border-none focus:outline-none rounded-full flex items-center justify-center bg-blue text-white transform transition ease-in-out duration-500 relative overflow-hidden ${!nextBtnEnabled ? 'opacity-50' : 'hover:scale-110 group' }`}
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <svg className="w-4 h-4 relative z-10" viewBox="0 0 238.003 238.003">
                  <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" fill="currentColor" />
                </svg>

                <span className="absolute inset-0 flex flex-wrap z-1 items-center justify-center">
                  <span className="w-0 h-0 rounded-full bg-black group-hover:w-full group-hover:h-full transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 transform scale-110"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}