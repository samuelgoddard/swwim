import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ImageWrapper from '../helpers/image-wrapper'
import spacetime from 'spacetime'

const NewsTeaser = React.forwardRef(({href, heading, noBorder, image, author, theme, category, date}, ref) => {
  let arrowForeground = '#FFFFFF';
  let arrowBackground = '#1658B3';

  if (theme === 'blue') {
    arrowForeground = '#1658B3';
    arrowBackground = '#FFFFFF';
  }

  let d = spacetime(date)
  return (
    <Link href={href}>
      <a className={`flex flex-wrap text-current md:-mx-3 2xl:-mx-5 py-8 md:py-10 2xl:py-16 group ${noBorder ? '' : 'border-b border-current' }`}>
        <div className="w-full md:w-5/12 md:px-3 2xl:px-5 mb-3 md:mb-0">
          <div className="bg-blue-dark overflow-hidden">

            {image && (
              <>
                <div className="block md:hidden transform group-hover:scale-110 group-focus:scale-110 transition ease-in-out duration-500">
                  <ImageWrapper
                    image={image}
                    className="w-full will-change"
                    baseWidth={620}
                    baseHeight={380}
                    alt={heading}
                  />
                </div>
                <div className="hidden md:block transform group-hover:scale-110 group-focus:scale-110 transition ease-in-out duration-500">
                  <ImageWrapper
                    image={image}
                    className="w-full will-change"
                    baseWidth={740}
                    baseHeight={500}
                    alt={heading}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-full md:w-7/12 md:px-3 2xl:px-5">
          <div className="flex flex-wrap items-start min-h-full">
            <div className="w-full flex flex-wrap items-start pb-5">
              <h3 className="block text-2xl md:text-3xl lg:text-4xl font-display w-10/12 xl:w-7/12 pr-8 md:pr-16 md:pt-2">{heading}</h3>

              <svg className="w-10 ml-auto transform hover:scale-125 transition ease-in-out duration-300 mr-1" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21.5" r="21" fill={arrowBackground}/><path d="M12.227 20.603H27.86v2.017H12.227v-2.017z" fill={arrowForeground}/><path d="M23.523 28.37l-1.413-1.413 5.346-5.345-5.346-5.345 1.413-1.412 6.757 6.757-6.757 6.758z" fill={ arrowForeground }/></svg>
            </div>

            <div className="w-full flex flex-wrap items-end md:items-center mt-auto md:pb-2">
              <div className="md:flex md:flex-wrap">
                { category && (
                  <span className="font-display uppercase text-sm mb-1 md:mb-0 mr-3 md:mr-5 flex items-center">
                    <svg className="w-3 md:w-4 mr-2 md:-mt-1" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.007 14.76a.823.823 0 000-1.163l-.173-.173 1.948-.865.06.067.878.863a2.68 2.68 0 004.22-3.21l2.167-.958.49.484a.822.822 0 001.162-1.163L6.36.24a.824.824 0 00-1.163 1.166l.408.408-4.115 9.266-.083-.086A.823.823 0 00.24 12.157l2.604 2.603c.322.32.841.32 1.163 0zm5.396-2.375a1.121 1.121 0 01-1.583 0l-.503-.51 2.188-.965c.342.447.299 1.08-.102 1.476zM6.854 3.061l1.197 1.197L3.55 10.5l3.305-7.439z" fill="currentColor"/></svg>                  
                    <span className="block -mb-px">
                      Event
                    </span>
                  </span>
                )}
                {date && (
                  <span className="font-display uppercase text-sm mb-1 md:mb-0 opacity-60 mr-3 md:mr-10 block">{d.unixFmt('dd.MM.yy')}</span>
                )}
                <span className="font-display text-sm mb-1 md:mb-0 flex items-center">
                  <svg className="w-3 md:w-4 mr-2" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 17c4.693 0 8.5-3.807 8.5-8.5S13.193 0 8.5 0A8.502 8.502 0 000 8.5C0 13.193 3.807 17 8.5 17zM7.512 4.116a.597.597 0 011.193 0v4.507l2.49 1.873a.617.617 0 01.124.844.576.576 0 01-.473.247.555.555 0 01-.35-.124L7.76 9.405a.604.604 0 01-.247-.473V4.116z" fill="currentColor"/></svg>
                  <span className="block -mb-px">
                    2 Minute Read
                  </span>
                </span>
              </div>
              {author && (
                <span className="font-display ml-auto flex flex-wrap items-center order-1 md:order-2 mb-3 md:mb-0">
                <span className="block">By {author.firstName}</span>
                {author.image && (
                  <div className="w-10 h-10 rounded-full border-white border-2 ml-3">
                    <ImageWrapper
                      image={author.image.asset}
                      className="rounded-full will-change"
                      baseWidth={350}
                      baseHeight={350}
                      alt={author.name}
                    />
                  </div>
                )}
              </span>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
})

export default NewsTeaser