import React, { useEffect, useState, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import NewsTeaserStacked from './news-teaser-stacked';

export default function NewsCarousel({slides}) {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "keepSnaps",
    align: 'start',
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
  }, [embla, setScrollSnaps, onSelect]);

  return(
    <>
      <div className="embla embla--news">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((e, i) => (
              <div key={i} className="embla__slide">
                <div className="embla__slide__inner">
                  <div className="embla__slide__img">
                      <NewsTeaserStacked
                        heading={e.title}
                        categories={e.categories}
                        image={e.heroImage}
                        author={e.author}
                        date={e.date}
                        href={`/news/${e.slug.current}`}
                        content={e.content}
                      />
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