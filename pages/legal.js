import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import BlockContentWrapper from '../components/block-content-wrapper'
import SanityPageService from '../services/sanityPageService'
import { NextSeo } from 'next-seo'

const query = `{
  "legal": *[_type == "legal"] {
    title,
    content
  },
  "contact": *[_type == "contact"][0] {
    title,
    email,
    phoneNumber,
    address,
    socialLinks[] {
      title,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Legal(initialData) {
  const { data: { legal, contact }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Legal" />

      <Header contact={contact} />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blue bg-noise text-white overflow-hidden"
      >
        <motion.div variants={fade} className="relative z-10">
          <Container>
            <div className="relative mb-16 md:mb-20 2xl:mb-28 mx-[3%] md:mx-[5%] lg:mx-24 2xl:mx-32">
              <span className="text-xl md:text-2xl 2xl:text-3xl font-display uppercase flex mb-4 md:mb-6 2xl:mb-8 justify-center">
                <span className="block mx-px">L</span>
                <span className="block mx-px animate--letter-float">e</span>
                <span className="block mx-px">g</span>
                <span className="block mx-px animate--letter-float">a</span>
                <span className="block mx-px">l</span>
              </span>

              <div className="relative">
                <h1 className="block font-display uppercase text-[9.7vw] md:text-[6.45vw] lg:text-[5.75vw] 2xl:text-[80px] leading-none relative z-10 text-center">Terms &amp; Conditions</h1>
              </div>
            </div>
          </Container>

          <Container>
            <div className="relative z-10 overflow-visible pb-12 md:pb-32 2xl:pb-40">
              <Tabs selectedTabClassName="bg-white block text-blue px-2">
                <TabList className="md:mx-[10%] lg:mx-32 xl:mx-40 2xl:mx-56 flex flex-wrap mb-8 md:mb-10 2xl:mb-12 font-bold">

                  {legal.map((item, i) => {
                    return (
                      <Tab key={i} className="border-b border-white mr-5 px-1 block cursor-pointer">{item.title}</Tab>
                    )
                  })}
                </TabList>

                {/* Terms */}
                {legal.map((item, i) => {
                  return (
                    <TabPanel key={i}>
                      <div className="md:mx-[10%] lg:mx-32 xl:mx-40 2xl:mx-56 content content--fancy-first content--large">
                        <BlockContentWrapper text={item.content} />
                      </div>
                    </TabPanel>
                  )
                })}
              </Tabs>
            </div>
          </Container>
        </motion.div>
      
        <motion.div variants={fade} className="relative z-10">
          <Footer contact={contact} />
        </motion.div>
      </motion.section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props
  };
}