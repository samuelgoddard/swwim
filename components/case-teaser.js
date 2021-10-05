import Link from "next/link";
import ImageWrapper from "../helpers/image-wrapper";

export default function CaseTeaser({ heading, image, tags, index, href }) {
  return(
    <Link href={href}>
      <a className="flex flex-wrap text-current border-b border-current pt-6 pb-4 md:py-12 2xl:py-14 md:-mx-8 group">
        <div className="flex flex-wrap w-full md:px-8 2xl:px-12">
          <div className="w-full md:w-1/2 md:px-8 flex flex-wrap order-2 md:order-1 relative">
            <div className="w-10 md:w-full self-end mb-auto hidden md:block">
              <span className="block stroke stroke--thin text-2xl md:text-4xl 2xl:text-5xl font-bold mt-[0px] md:-mt-1 md:w-1/3 pr-2">{index}</span>
            </div>

            <div className="flex-1 md:w-full mt-[5px] md:mt-0 md:h-full md:flex md:flex-wrap">
              <div className="w-full self-end mt-auto">
                <div className="w-10/12">
                  { heading && (
                    <h2 className="font-display block text-[33px] md:text-[5.5vw] 2xl:text-[80px] leading-none mb-2 md:mb-0 pb-0 max-w-[240px] md:max-w-none">{heading}</h2>
                  )}
                </div>
              </div>
              
              { tags && (
                <div className="w-full self-end md:pb-12 2xl:pb-16 mt-5 md:mt-auto">
                  {tags.map((item, i) => {
                    return (<span key={i} className="block md:block text-[12px] md:text-[15px] 2xl:text-[15px] leading-snug mb-[2px] mr-3 md:mr-0 md:mb-0">{item.title}</span>)
                  })}
                </div>
              )}
            </div>

            <span className="block rounded-full ml-auto ring-white transform hover:scale-125 transition ease-in-out duration-300 absolute bottom-0 right-0 bg-blue md:hidden">
              <svg className="w-8 transform rotate-90 text-white" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor"/></svg>
            </span>

            <div className="w-10 md:w-full self-end mb-auto block md:hidden">
              <span className="block stroke stroke--thin text-3xl md:text-4xl 2xl:text-5xl font-bold mt-[0px] md:-mt-1 md:w-1/3 pr-2">{index}</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:px-8 order-1 md:order-2 mb-4 md:mb-0">
            { image && (
              <>
                <div className="block md:hidden bg-blue">
                  <ImageWrapper
                    image={image}
                    className="w-full will-change"
                    baseWidth={520}
                    baseHeight={520}
                    alt={heading}
                  />
                </div>

                <div className="hidden md:block bg-blue overflow-hidden">
                  <div className="transform ease-in-out duration-500 scale-100 group-hover:scale-105 group-focus:scale-105 will-change">
                    <ImageWrapper
                      image={image}
                      className="w-full"
                      baseWidth={720}
                      baseHeight={720}
                      alt={heading}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}