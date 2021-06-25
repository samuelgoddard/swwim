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
    <Tabs selectedTabClassName="bg-white block text-blue px-2">
      <TabList className="md:mx-[10%] lg:mx-32 xl:mx-40 2xl:mx-56 flex flex-wrap mb-8 md:mb-10 2xl:mb-12 font-bold">

        {items.map((item, i) => {
          return (
            <Tab key={i} className="border-b border-white mr-5 px-1 block cursor-pointer" onClick={() => updateHeight()}>{item.title}</Tab>
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