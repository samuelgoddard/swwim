import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import Image from "next/image";
import image from "next/image";
import ImageWrapper from "../helpers/image-wrapper";

export default function ImageCarousel({ images, caption, supportingQuoteAuthor, supportingQuote }) {
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
    <div className="w-full flex flex-wrap my-8 md:my-12 2xl:my-16 md:-mx-4 2xl:-mx-10 max-w-none">
      <div className="w-full md:w-7/12 lg:w-8/12 md:px-4 2xl:px-10">

        { images?.length > 1 ? (
          <div className="embla">
            <div className="relative">
              <div className="embla__viewport" ref={viewportRef}>
              <div className="embla__container ml-0 md:ml-0">
                  {images.map((image, i) => {
                    return (
                    <div className="embla__slide px-0 bg-blue text-white w-full min-w-full" key={i}>
                      <div className="w-full min-w-full">
                        <ImageWrapper
                          image={image}
                          className="w-full"
                          baseWidth={720}
                          baseHeight={420}
                        />
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>        

              <div className="absolute bottom-0 left-0 flex ml-5 mb-5 space-x-2">
                <button
                  className={`w-10 h-10 focus:border-none focus:outline-none rounded-full flex items-center justify-center bg-blue text-white transform transition ease-in-out duration-300 ${!prevBtnEnabled ? 'opacity-50' : 'hover:scale-110 hover:bg-black' }`}
                  onClick={scrollPrev}
                  disabled={!prevBtnEnabled}
                >
                  <svg className="w-4 h-4" viewBox="137.718 -1.001 366.563 644">
                    <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" fill="currentColor" />
                  </svg>
                </button>
                
                <button
                  className={`w-10 h-10 focus:border-none focus:outline-none rounded-full flex items-center justify-center bg-blue text-white transform transition ease-in-out duration-300 ${!nextBtnEnabled ? 'opacity-50' : 'hover:scale-110 hover:bg-black' }`}
                  onClick={scrollNext}
                  disabled={!nextBtnEnabled}
                >
                  <svg className="w-4 h-4" viewBox="0 0 238.003 238.003">
                    <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
            { caption && (
              <span className="opacity-60 md:text-lg leading-tight block font-medium mt-2">{caption}</span>
            )}
          </div>
        ) : (
          <figure>
            <div className="bg-blue">
              <ImageWrapper
                image={images[0].asset}
                className="w-full"
                baseWidth={720}
                baseHeight={420}
              />
            </div>
            { caption && (
              <figcaption className="opacity-60 md:text-lg leading-tight block font-medium mt-2">{caption}</figcaption>
            )}
          </figure>
        )}
      </div>
      {(supportingQuote || supportingQuoteAuthor) && (
        <div className="w-full md:w-5/12 lg:w-4/12 md:px-4 2xl:px-10">
          <div className="border-b md:border-t md:border-b-0 border-brown pb-5 md:pb-0 pt-5 md:pt-8 2xl:pt-10">
            { supportingQuote && (
              <>
                <span className="block font-display text-4xl md:text-5xl 2xl:text-6xl leading-none mb-2 md:mb-0 pb-0">“</span>
                <p className="block font-display text-xl md:text-xl lg:text-2xl xl:text-3xl -mt-5 leading-tight md:leading-tight 2xl:leading-tight mb-3 md:mb-4">{supportingQuote}</p>
              </>
            )}

            { supportingQuoteAuthor && (
              <div className="">
                <span className="block md:text-lg leading-snug">{supportingQuoteAuthor}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}