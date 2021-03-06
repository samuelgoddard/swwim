import React, { useEffect, useState, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import ImageWrapper from '../helpers/image-wrapper';

const AUTOPLAY_INTERVAL = 3000;

export default function InstaCarousel({ stories }) {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, draggable: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return(
    <>
      <div className="embla embla--insta">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {stories.map((e, i) => (
              <>
                { e.asset && (
                  <div key={i} className="embla__slide">
                    <div className="embla__slide__inner">
                      <div className="embla__slide__img">
                        <ImageWrapper
                          image={e.asset}
                          className="w-full will-change"
                          baseWidth={480}
                          baseHeight={720}
                        /> 

                        { e.video && (
                          <video loop={true} playsInline autoPlay="autoplay" muted className="w-full h-full object-center object-cover absolute top-0 left-0 z-50 transition-transform ease-in-out duration-700">
                            <source src={e.video.asset.url} type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                        )}
                        
                        <div className="h-[4px] w-full bg-black bg-opacity-20 relative">
                          <div className="insta-loader h-[4px] absolute inset-0 z-[51] bg-gradient-to-r from-yellow-500  to-red-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}