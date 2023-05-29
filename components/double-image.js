import ImageWrapper from '../helpers/image-wrapper'

export default function DoubleImage({ image1, image2 }) {
  return (
    <div className="w-full single-image">
      <div className="flex flex-wrap -mx-4 md:-mx-6">
        <div className="w-1/2 px-4 md:px-6">
          <ImageWrapper
            image={image1}
            className="w-full"
            baseWidth={740}
            baseHeight={740}
          />
        </div>
        <div className="w-1/2 px-4 md:px-6">
          <ImageWrapper
            image={image2}
            className="w-full"
            baseWidth={740}
            baseHeight={740}
          />
        </div>
      </div>
    </div>
  )
}