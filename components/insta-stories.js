import Modal from './modal';
import ImageWrapper from '../helpers/image-wrapper';
import Image from 'next/image';
import InstaCarousel from './insta-carousel';
import { createRef } from 'react'
import ImageStandard from '../helpers/image-standard';

export default function InstaStories({stories}) {
  const newRef = createRef();

  return (
    <>
      <button onClick={() => newRef.current.open()} className="absolute bottom-0 mb-6 left-0 w-[55vw] h-[55vw] md:w-[30vw] md:h-[30vw] ml-[-28vw] md:-[-ml-15vw] lg:-ml-40 flex flex-wrap items-center justify-center max-w-xs max-h-[20rem] border-none hover:border-none focus:border-none outline-none focus:outline-none transform hover:scale-[1.15] focus:scale-[1.15] transition ease-in-out duration-500">
        <div className="absolute bottom-0 left-0 w-full animate-spin-slow">
          <ImageStandard width={301} height={304} layout="responsive" src="/icons/just-keep-swimming.svg" alt="Just Keep Swimming" className="w-full will-change" />
        </div>

        <div className="w-5/12">
          <ImageStandard width={200} height={200} layout="responsive" src="/icons/insta-profile.svg" alt="Insta Illustration" className="w-full will-change" />
        </div>
      </button>

      <Modal ref={newRef}>
        <div className="flex items-center justify-center">
          <div className="w-9/12 md:w-9/12 max-w-md md:max-w-md xl:max-w-lg">
            <InstaCarousel stories={stories} />
          </div>
        </div>
      </Modal>
    </>
  )
}