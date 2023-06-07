import SanityBlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import ImageWrapper from "../helpers/image-wrapper";

export default function CaseTeaser({ heading, image, images, tags, index, text, href, service }) {
  return(
    <Link href={href}>
      <a className="flex flex-wrap text-current border-b border-current pt-6 pb-4 md:py-12 2xl:py-14 group">
        <div className={`flex flex-wrap w-full ${service ? 'items-' : '' }`}>
          <div className={`lg:px-8 flex flex-wrap order-2 md:order-1 relative ${service ? 'w-full md:w-[45%]' : 'w-full md:w-1/2' }`}>
            <div className="w-10 md:w-full self-end mb-auto hidden md:block">
              <span className={`block stroke stroke--thin text-2xl md:text-4xl 2xl:text-5xl font-bold mt-[0px] md:-mt-1 md:w-1/3 pr-2 ${service && 'pb-6'}`}>{index}</span>
            </div>

            <div className="flex-1 md:w-full mt-[5px] md:mt-0 md:h-full md:flex md:flex-wrap">
              <div className={`w-full ${tags ? 'self-end mt-auto' : 'my-auto'}`}>
                <div className={`${tags ? 'w-10/12' : 'w-11/12 md:w-10/12' }`}>
                  { heading && (
                    <h2 className={`font-display block ${service ? 'text-[40px] md:text-[4.1vw] 2xl:text-[60px]' : 'text-[33px] md:text-[5.5vw] 2xl:text-[80px]' } leading-none mb-2 md:mb-6 pb-0 max-w-[240px] ${service ? 'md:max-w-[80%]' : 'md:max-w-none'}`}>{heading}</h2>
                  )}

                  { text && (
                    <div className="w-full self-end md:pb-12 2xl:pb-16 mt-5 md:mt-auto">
                      <span className="block md:block text-base md:text-base xl:text-lg leading-snug mb-[2px] mr-3 md:mr-0 md:mb-0">
                        <SanityBlockContent
                          serializers={{ 
                            container: ({ children }) => children
                          }}
                            blocks={text}
                        />
                      </span>
                    </div>
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
          <div className={`lg:px-8 order-1 md:order-2 mb-4 md:mb-0 relative ${service ? 'xl:self-center relative w-full md:w-[55%]' : 'overflow- w-full md:w-1/2' }`}>
            <div className="w-20 lg:w-28 h-20 lg:h-28 opacity-0 transform scale-50 group-hover:opacity-100 group-hover:scale-100 transition ease-in-out duration-500 bg-blue absolute bottom-[30%] md:bottom-[50%] lg:bottom-[30%] xl:bottom-[20%] md:left-[-30px] lg:left-[-10px] z-10 rounded-full items-center justify-center hidden md:flex"><span className="block text-white uppercase font-display text-base lg:text-lg">View</span></div>
            
            {service ? (
              <div className="flex flex-wrap -mx-3 lg:-mx-4 relative">
                { images && (
                  <>
                    <div className="w-1/2 px-3 lg:px-4">
                      <div className="block md:hidden bg-blue">
                        <ImageWrapper
                          image={images[0]}
                          className="w-full will-change"
                          baseWidth={350}
                          baseHeight={500}
                          alt={heading}
                        />
                      </div>

                      <div className="hidden md:block bg-blue overflow-hidden">
                        <div className="transform ease-in-out duration-500 scale-[1.01] group-hover:scale-105 group-focus:scale-105 will-change">
                          <ImageWrapper
                            image={images[0]}
                            className="w-full"
                            baseWidth={450}
                            baseHeight={720}
                            alt={heading}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 px-3 lg:px-4">
                    <div className="block md:hidden bg-blue">
                      <ImageWrapper
                        image={images[1]}
                        className="w-full will-change"
                        baseWidth={350}
                        baseHeight={500}
                        alt={heading}
                      />
                    </div>

                    <div className="hidden md:block bg-blue overflow-hidden">
                      <div className="transform ease-in-out duration-500 scale-[1.01] group-hover:scale-105 group-focus:scale-105 will-change">
                        <ImageWrapper
                          image={images[1]}
                          className="w-full"
                          baseWidth={450}
                          baseHeight={720}
                          alt={heading}
                        />
                      </div>
                    </div>
                  </div>
                </>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}