import Img from 'next/image';
import { imageUrlBuilder, useNextSanityImage } from 'next-sanity-image';
import sanity from '../services/sanity';

const customImageBuilder = (imageUrlBuilder, options, baseWidth, baseHeight, fill, ignoreCropping) => {
  return ignoreCropping ? imageUrlBuilder.fit('clip') : imageUrlBuilder
    .size(baseWidth || options.originalImageDimensions.width, baseHeight || options.originalImageDimensions.height)
    .fit(fill ? 'fill' : 'clip')
    .quality(95);
};

function ImageWrapper({ image, sizes, className, alt, baseWidth, baseHeight, noPlaceholder, fill, objectFit, ignoreCropping, priority, next }) {
  if (next && !(image?.asset?.metadata?.dimensions || image?.asset?._ref)) return <></>
  const imageProps =  useNextSanityImage(
    sanity.client,
    image,
    { imageBuilder: (imageUrlBuilder, options) => customImageBuilder(imageUrlBuilder, options, baseWidth, baseHeight, fill, ignoreCropping)} 
  ) 


  let setBaseWidth = imageProps.width
  let removeWidth = false

  if (ignoreCropping) {
    setBaseWidth =  imageProps.width
  } else if (fill) {
    removeWidth = true
  } else if (baseWidth) {
    setBaseWidth = baseWidth
  }

  let setBaseHeight =  imageProps.height
  let removeHeight = false
  
  if (ignoreCropping) {
    setBaseHeight =  imageProps.height
  } else if (fill) {
    removeHeight = true
  } else if (baseHeight) {
    setBaseHeight = baseHeight
  }

  return (
    <div className={`${className} ${ noPlaceholder ? '' : 'bg-grey-100 dark:bg-grey-700'}`}>
      <Img
        src={imageProps.src}
        { ...( !removeWidth && { width: setBaseWidth } ) }
        { ...( !removeHeight && { height:  setBaseHeight } ) }
        className={className}
        alt={alt}
        layout={fill ? 'fill' : 'responsive'}
        objectFit={fill ? 'cover' : null}
        priority={priority ? priority : false}
      />
    </div>
  )
}

export default ImageWrapper;