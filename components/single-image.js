import ImageWrapper from '../helpers/image-wrapper'

export default function SingleImage({ image }) {
  return (
    <div className="w-full single-image">
      <ImageWrapper
        image={image}
        className="w-full"
        baseWidth={1400}
        baseHeight={760}
      />
    </div>
  )
}