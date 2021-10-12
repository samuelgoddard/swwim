import { useState } from "react";
import NextImage from "next/image";

export default function ImageStandard({ src, height, width, layout, className }) {
  const [ready, setReady] = useState(false);

  const handleLoad = (event) => {
    event.persist();
    if (event.target.srcset) {
      setReady(true);
    }
  };

  return (
    <div
      style={{
        opacity: ready ? 1 : 0,
        transition: "opacity .5s ease-in-out"
      }}
    >
      <NextImage
        src={src}
        height={height}
        width={width}
        layout={layout}
        className={className}
        onLoad={handleLoad}
      />
    </div>
  );
}
