import React, { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { useEmblaCarousel } from 'embla-carousel/react'
import { gsap } from 'gsap';
import ImageWrapper from '../helpers/image-wrapper';

export default function AboutCarousel({ images }) {
  var ease = 0.08;
  const container = useRef(null);
  const circle = useRef(null);

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
    gsap.set(".circle", {xPercent: -50, yPercent: -50});

    const ball = document.querySelector(".circle");
    const container = document.querySelector(".circle-container");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.20;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    container.addEventListener("mousemove", e => {    
      mouse.x = e.x;
      mouse.y = e.y;  
    });

    container.addEventListener("mousedown", e => {    
      ball.classList.add("is--active");
      container.classList.add("is--active");
    });

    container.addEventListener("mouseup", e => {    
      ball.classList.remove("is--active");
      container.classList.remove("is--active");
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
      
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });


  }, [embla, setScrollSnaps, onSelect]);

  return(
    <>
      <div className="embla embla--staggered circle-container group">
        <div className="circle cursor-follow group-hover:opacity-100 tracking-wide hidden md:flex">
          <div className="arrows absolute top-0 left-0 right-0 bottom-0 w-full flex items-center">
            <svg className="w-4 absolute -ml-8" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.953 1.915L2.99 10.982.97 9.071 9.935 0l2.02 1.915z" fill="#fff"/><path d="M2.915 6.864l9.038 9.04-1.94 1.942L.97 8.806l1.944-1.942z" fill="#fff"/></svg>

            <svg className="w-4 transform rotate-180 absolute right-0 -mr-8" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.953 1.915L2.99 10.982.97 9.071 9.935 0l2.02 1.915z" fill="#fff"/><path d="M2.915 6.864l9.038 9.04-1.94 1.942L.97 8.806l1.944-1.942z" fill="#fff"/></svg>
          </div>
          drag
        </div>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {images?.map((e, i) => (
              <div key={i} className="embla__slide">
                <div className="embla__slide__inner">
                  <div className="embla__slide__img">
                    <div className="block md:hidden">
                      { (i%2 == 0) ? (
                        <div className="bg-blue-dark">
                          <ImageWrapper
                            image={e.asset}
                            className="w-full"
                            baseWidth={600}
                            baseHeight={400}
                            priority
                          />
                        </div>
                      ) : (
                        <div className="bg-blue-dark">
                          <ImageWrapper
                            image={e.asset}
                            className="w-full"
                            baseWidth={300}
                            baseHeight={550}
                            priority
                          />
                        </div>
                      )}
                    </div>
                    <div className="hidden md:block">
                      { (i%2 == 0) ? (
                        <div className="bg-blue-dark">
                          <ImageWrapper
                            image={e.asset}
                            className="w-full"
                            baseWidth={900}
                            baseHeight={650}
                            priority
                          />
                        </div>
                      ) : (
                        <div className="bg-blue-dark">
                          <ImageWrapper
                            image={e.asset}
                            className="w-full"
                            baseWidth={550}
                            baseHeight={850}
                            priority
                          />
                        </div>
                      )}
                    </div>
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