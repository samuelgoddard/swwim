import { useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import BlockContentWrapper from '../components/block-content-wrapper'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'

export default function LegalTabs({ items }) {
  const { scroll } = useContext(SmoothScrollContext)

  function updateHeight() {
    setTimeout(() => scroll.update(), 50);
  }

  return (
    <Tabs selectedTabClassName="bg-white text-blue block text-blue px-2 opacity-100 transition-none">
      <TabList className="md:mx-[10%] lg:mx-32 xl:mx-40 2xl:mx-56 flex flex-wrap mb-8 md:mb-10 2xl:mb-12 font-bold">

        {items.map((item, i) => {
          return (
            <Tab key={i} className="border-b tab border-white mr-5 px-1 block cursor-pointer relative group" onClick={() => updateHeight()}>
              <div className="bg-white absolute bottom-0 left-0 right-0 w-full h-0 group-hover:h-full transition-all ease-in-out duration-300 z-10"></div>
              <span className="z-[100] group-hover:text-blue relative block transition-colors duration-300 ease-in">{item.title}</span></Tab>
          )
        })}
      </TabList>

      {/* Terms */}
      {items.map((item, i) => {
        return (
          <TabPanel key={i}>
            <div className="md:mx-[10%] lg:mx-32 xl:mx-40 2xl:mx-56 content content--fancy-first content--large">
              <BlockContentWrapper text={item.content} />
            </div>
          </TabPanel>
        )
      })}
    </Tabs>
  )
}