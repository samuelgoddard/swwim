import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Box = ({ active, deactivated = false, linkToIndex, children, arrow, arrowRight }) => {
  let className = 'flex items-center justify-center w-10 h-10 mx-1 border-b border-blue relative group'

  const addClass = (classToAdd) => className = `${className} ${classToAdd}`
  if (arrow) {
    addClass('')
    addClass('border-none w-14 h-14 block transform transition-transform ease-in-out duration-300 hover:scale-125 absolute bottom-0 left-0 cursor-pointer')
  } 

  if (arrowRight ) {
    addClass('')
    addClass('border-none w-14 h-14 block transform transition-transform ease-in-out duration-300 hover:scale-125 absolute bottom-0 left-auto right-0 cursor-pointer')
  } 

  else if (active) {
    addClass('cursor-pointer')
    addClass('text-blue hover:text-white transition-color ease-in-out duration-300')
  }
  else {
    addClass('cursor-pointer')
    addClass('text-blue border-opacity-20 hover:text-white transition-color ease-in-out duration-300')
  }

  if (deactivated) {
    addClass('cursor-not-allowed')
    addClass('opacity-40 hover:scale-100')
  }

  return (
    deactivated ? 
      <div className={className}>
        {children}
      </div>
    :
      <Link href={linkToIndex === 1 ? '/news' : `/news/page/${linkToIndex}`}>
        <div className={className}>
          <div className="relative z-10">
            {children}
          </div>

          { !arrow && (
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-blue transition-all ease-in-out z-1 duration-300 group-hover:h-full"></div>
          )}
        </div>
      </Link>
  )
}


export default function SkipButtons({ index, maxIndex }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  let firstIndex = 0
  let secondIndex = 0
  let thirdIndex = 0
  let leftArrowDisabled = false
  let rightArrowDisabled = false

  switch (index) {
    case 1:
      firstIndex = 1
      secondIndex = 2
      thirdIndex = 3
      leftArrowDisabled = true
      break
    case maxIndex + 1:
      firstIndex = index - 2
      secondIndex = index - 1
      thirdIndex = index
      rightArrowDisabled = true
      break
    default:
      firstIndex = index - 1
      secondIndex = index
      thirdIndex = index + 1
  }

  return (
    <div className="flex justify-center items-center relative w-[260px] p-2 overflow-hidden mx-auto">
      <Box deactivated={leftArrowDisabled} arrow linkToIndex={rightArrowDisabled ? thirdIndex - 1 : secondIndex - 1}>
        <svg className="w-8 mt-4 ml-2 block transform rotate-180" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21.5" r="21" fill="#1658B3"/><path d="M12.227 20.603H27.86v2.017H12.227v-2.017z" fill="#FFF"/><path d="M23.523 28.37l-1.413-1.413 5.346-5.345-5.346-5.345 1.413-1.412 6.757 6.757-6.757 6.758z" fill="#FFF" /></svg>
      </Box>
      <Box active={index === firstIndex} linkToIndex={firstIndex}>{firstIndex}</Box>
      <Box active={index === secondIndex} linkToIndex={secondIndex}>{secondIndex}</Box>
      <Box active={index === thirdIndex} linkToIndex={thirdIndex}>{thirdIndex}</Box>
      <Box deactivated={rightArrowDisabled} arrow arrowRight linkToIndex={leftArrowDisabled ? firstIndex + 1 : secondIndex + 1}>
        <svg className="w-8 mt-4 ml-3 md:ml-5 block" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21.5" r="21" fill="#1658B3"/><path d="M12.227 20.603H27.86v2.017H12.227v-2.017z" fill="#FFF"/><path d="M23.523 28.37l-1.413-1.413 5.346-5.345-5.346-5.345 1.413-1.412 6.757 6.757-6.757 6.758z" fill="#FFF" /></svg>
      </Box>
    </div>
  )
}