import Cross from '../icons/cross'

export default function Accordion({ children, heading, index, open }) {
  return(
    <div className={`border-b border-blue ${ index == '01' ? 'border-t' : ''}`}>
      <details className="flex flex-wrap" open={open}>
        <summary open className="flex flex-wrap items-start py-6 md:py-10 2xl:py-12 cursor-pointer ring-blue">
          <span className="block stroke stroke--thin text-2xl md:text-3xl font-bold mt-[-3px] md:-mt-1 md:w-1/3 pr-2">{index}</span>
          <div className="flex-1 md:w-2/3 ml-auto">
            <div className="flex flex-wrap -mx-3">
              <span className="block text-xl md:text-4xl 2xl:text-5xl font-display uppercase mb-0 pb-0 px-3 flex-1">{heading}</span>
              <div className="px-3 ml-auto">
                <Cross width="w-4 md:w-6 2xl:w-8" extraClasses="transform rotate-45 mt-[6px] md:mt-1" />
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