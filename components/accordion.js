export default function Accordion({ children, heading, index, open }) {
  return(
    <div className={`border-b border-blue ${ index == '01' ? 'border-t' : ''}`}>
      <details className="flex flex-wrap" open={open}>
        <summary open className="py-6 md:py-10 2xl:py-12 cursor-pointer ring-blue">
          <div className="flex flex-wrap items-start">
            <span className="block stroke stroke--thin text-2xl md:text-3xl font-bold mt-[0px] md:-mt-1 md:w-1/3 pr-2">{index}</span>
            <div className="flex-1 md:w-2/3 ml-auto">
              <div className="flex flex-wrap -mx-3">
                <span className="block text-xl md:text-4xl 2xl:text-5xl font-display uppercase leading-tight mb-0 pb-0 px-3 flex-1 mt-[6px] md:mt-0">{heading}</span>
                <div className="px-3 ml-auto">
                  <svg className="w-4 md:w-6 2xl:w-8 transform rotate-45 mt-[6px] md:mt-1" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.305 27.132L26.354 2.084M26.354 27.132L1.306 2.083" stroke="#1658B3" strokeWidth="3.24"/></svg>
                </div>
              </div>
            </div>
          </div>
        </summary>

        <div className="md:w-2/3 ml-auto pb-10 md:pb-16 2xl:pb-20">
          <div className="content text-lg max-w-2xl">
            {children}
          </div>
        </div>
      </details>
    </div>
  )
}