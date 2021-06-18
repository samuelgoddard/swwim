export default function Quote({ quote, personJobTitle}) {
  return (
    <div className="w-full flex flex-wrap my-8 md:my-12 2xl:my-16">
      <div className="w-full">
        <div className="border-b md:border-t md:border-b-0 border-brown pb-5 md:pb-0 pt-5 md:pt-8 2xl:pt-10">
          <span className="block font-display text-4xl md:text-5xl 2xl:text-6xl leading-none mb-2 md:mb-0 pb-0">“</span>
          <p className="block font-display text-xl md:text-xl lg:text-2xl xl:text-3xl -mt-5 leading-tight md:leading-tight 2xl:leading-tight mb-3 md:mb-4">{quote}</p>

          <div className="">
            <span className="block md:text-lg leading-snug">{personJobTitle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}