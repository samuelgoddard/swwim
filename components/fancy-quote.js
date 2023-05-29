import ImageStandard from "../helpers/image-standard";

export default function FancyQuote({ quote, personJobTitle}) {
  return (
    <div className="w-full flex flex-wrap my-8 md:my-16 2xl:my-24 md:px-12">
      <div className="w-[15%] md:w-[12%] mx-auto mb-2">
        <div className="animate--float">
          <ImageStandard width={130} height={115} layout="responsive" src="/icons/speech-bubbles.svg" alt="Speech Bubble Illustration" className="w-full will-change" />
        </div>
      </div>

      <div className="relative mb-5 md:mb-8 2xl:mb-12">
        <span className="font-display text-[26px] md:text-[3.5vw] 2xl:text-[52px] leading-[1.15em] md:leading-[1.2em] 2xl:leading-[1.1em] relative z-10 block text-center mb-3 md:mb-6">
          <span className="block">
            “{quote}”
          </span>
        </span>

        
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap items-center mt-2 mx-auto">
            <div className="flex-1 text-center">
              <span className="block md:text-lg leading-snug"><span className="">- {personJobTitle}</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}