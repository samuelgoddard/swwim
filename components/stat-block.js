export default function StatBlock({ heading, stats }) {
  return (
    <div className="w-full md:w-7/12 xl:w-1/2 my-8 md:my-12 2xl:my-16 max-w-none">
      <div className="bg-blue text-white p-6 md:p-8 2xl:p-10">
        { heading && (
          <span className="block font-display text-2xl md:text-2xl lg:text-3xl mb-6 md:mb-8 2xl:mb-12">{heading}</span>
        )}

        { stats?.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              return (
              <div className="" key={i}>
                <span className="block font-display text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl">{stat.heading}</span>
                
                <span className="block opacity-50 w-10/12 leading-snug">{stat.subText}</span>
              </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}