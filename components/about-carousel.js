import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { useEmblaCarousel } from 'embla-carousel/react'

export default function AboutCarousel() {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    loop: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const slides = Array.from(Array(10).keys());

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return(
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((e, i) => (
              <div key={i} className="embla__slide">
                <div className="embla__slide__inner">
                  <div className="embla__slide__img">
                    { (i%2 == 0) ? (
                      <Image
                        src="https://placedog.net/900/550"
                        alt="Placeholder dog"
                        width={900}
                        height={550}
                        layout="responsive"
                        className="w-full"
                        priority
                      />
                    ) : (
                      <Image
                        src="https://placedog.net/550/800"
                        alt="Placeholder dog"
                        width={550}
                        height={800}
                        layout="responsive"
                        className="w-full"
                        priority
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}