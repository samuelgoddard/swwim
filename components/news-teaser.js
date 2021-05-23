export default function NewsTeaser({ heading, author,  }) {
  return(
    <div className="flex flex-wrap text-current md:-mx-3 2xl:-mx-5 border-b border-current py-8 md:py-10 2xl:py-16">
      <div className="w-full md:w-5/12 md:px-3 2xl:px-5 mb-3 md:mb-0">
        <img src="https://placedog.net/620/420" alt="placeholder" className="w-full hidden md:block" />
        <img src="https://placedog.net/620/340" alt="placeholder" className="w-full block md:hidden" />
      </div>
      <div className="w-full md:w-7/12 md:px-3 2xl:px-5">
        <div className="flex flex-wrap items-start min-h-full">
          <div className="w-full flex flex-wrap items-start pb-5">
            <h3 className="block text-2xl md:text-3xl lg:text-4xl font-display w-10/12 xl:w-7/12 pr-8 md:pr-16 md:pt-2">{heading}</h3>

            <svg className="w-10 ml-auto" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21.5" r="21" fill="#fff"/><path d="M12.227 20.603H27.86v2.017H12.227v-2.017z" fill="#1658B3"/><path d="M23.523 28.37l-1.413-1.413 5.346-5.345-5.346-5.345 1.413-1.412 6.757 6.757-6.757 6.758z" fill="#1658B3"/></svg>
          </div>

          <div className="w-full flex flex-wrap items-end md:items-center mt-auto md:pb-2">
            <div className="md:flex md:flex-wrap">
              <span className="font-display uppercase text-sm mb-1 md:mb-0 mr-3 md:mr-5 block">Event</span>
              <span className="font-display uppercase text-sm mb-1 md:mb-0 opacity-60 mr-3 md:mr-10 block">22.01.21</span>
              <span className="font-display text-sm mb-1 md:mb-0 block">2 Minute Read</span>
            </div>
            <span className="font-display text-sm ml-auto flex flex-wrap items-center">
              <span className="block">By Amber</span>
              <img src="https://placedog.net/320/320" alt="placeholder" className="w-10 h-10 rounded-full border-white border-2 ml-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}