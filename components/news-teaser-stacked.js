import Image from "next/image";
import Link from "next/link";

export default function NewsTeaserStacked({ heading, author, theme, supporting }) {
  return(
    <Link href="/news/slug">
      <a className="flex flex-wrap text-current">
        <div className="w-full mb-5">
          <div className="bg-blue-dark">
            <Image width={620} height={350} layout="responsive" src="https://placedog.net/620/350" alt="Placeholder Dog" className="w-full" />
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap items-start min-h-full">
            <div className="">
              <div className="w-full flex flex-wrap items-end md:items-center mt-auto mb-2 md:mb-4">
                <div className="flex flex-wrap">
                  <span className="font-display uppercase text-xs md:text-sm mb-1 md:mb-0 mr-3 md:mr-5 block">Event</span>
                  <span className="font-display uppercase text-xs md:text-sm mb-1 md:mb-0 opacity-60 mr-3 md:mr-10 block">22.01.21</span>
                  <span className="font-display text-xs md:text-sm mb-1 md:mb-0 block">2 Minute Read</span>
                </div>
              </div>

              <h3 className={`block font-display pr-5 leading-snug ${supporting ? 'text-base md:text-lg xl:text-2xl 2xl:text-3xl' : 'text-lg md:text-xl xl:text-3xl 2xl:text-4xl'}`}>{heading}</h3>

              <span className="text-sm md:text-base font-display flex flex-wrap items-center">
                <span className="block">By Amber</span>
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full border-white border-2 ml-3">
                  <Image width={320} height={320} layout="responsive" src="https://placedog.net/320/320" alt="Placeholder Dog" className="w-full rounded-full" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}