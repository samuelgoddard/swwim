import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Container from '../../components/container'
import { fade, fadeSmallDelay, revealInNoDelay, revealInLogoNoDelay, revealInLogoMoveNoDelay, textRevealSmallDelay } from "../../helpers/transitions"
import Logo from '../../components/logo'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '../../services/sanityPageService'
import ImageWrapper from '../../helpers/image-wrapper'
import CaseCarousel from '../../components/case-carousel'

const query = `*[_type == "caseStudy" && slug.current == $slug][0]{
  seo {
    ...,
    shareGraphic {
      asset->
    }
  },
  title,
  about,
  images[] {
    asset->
  },
  deliverables[]-> {
    title
  },
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function CaseStudySlug(initialData) {
  const { data: { seo, title, about, images, deliverables, slug, contact }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo
        title={seo?.metaTitle ? seo?.metaTitle : title }
        description={seo?.metaDesc ? seo?.metaDesc : about}
        openGraph={{
          images: [
            {
              url: seo?.shareGraphic?.asset.url ?? null,
              width: 1200,
              height: 630
            },
          ]
        }}
      />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed inset-0 z-[100] pointer-events-none"
      >
        <motion.div variants={revealInLogoNoDelay} className="absolute inset-0 w-full h-full text-white flex items-center justify-center pointer-events-none z-[110]">
          <div className="overflow-hidden">
            <motion.div variants={revealInLogoMoveNoDelay}>
              <Logo width="w-32 md:w-48 xl:w-56" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div variants={revealInNoDelay} className="absolute inset-0 w-full h-full bg-blue-dark text-white overflow-visible">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-blue-dark absolute top-0 left-0 right-0 mt-[-20vw] will-change">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,224C672,245,768,203,864,170.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        </motion.div>
      </motion.div>

      <Header theme="white" pinned active="case-studies" />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-white bg-noise text-blue overflow-hidden w-full min-h-screen"
      >
        <motion.div variants={fadeSmallDelay} className="relative z-20">
          <div className="flex flex-wrap md:max-h-screen md:fixed md:left-auto md:right-0 md:top-0 md:bottom-0 md:w-1/2 md:z-20">
            <div className="w-full relative z-20">
              {images?.length > 0 && (
                <>
                  <div className="block md:hidden bg-blue h-[40vh] w-full object-cover max-h-screen">
                    <CaseCarousel images={images} />
                  </div>
                  <div className="hidden md:block bg-blue w-full h-full object-cover max-h-screen">
                    <CaseCarousel images={images} />
                    {/* <ImageWrapper
                      image={images[0]}
                      className="w-full h-full object-cover max-h-screen"
                      baseWidth={730}
                      baseHeight={1000}
                      alt={title}
                      fill="cover"
                    /> */}
                  </div>
                </>
              )}
            </div>
          </div>

          <Container>
            <div className="flex flex-wrap md:min-h-screen relative md:z-10">
              <div className="w-full md:w-1/2 py-8 md:pt-32 md:pb-12 2xl:pt-40 2xl:pb-16 flex items-center">
                <div className="w-11/12 md:w-10/12">
                  <Link href="/case-studies">
                    <a className="flex flex-wrap space-x-3 items-center ring-white mb-8 md:mb-12 2xl:mb-16 group">

                    <span className="border border-blue border-opacity-30 rounded-full relative overflow-hidden group-hover:border-opacity-100 ease-in-out transition-all duration-500 transform rotate-90">
                      <svg className="absolute top-0 left-0 -translate-y-12 group-hover:translate-y-0 transition ease-in-out duration-500 w-8 transform rotate-180" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>

                      <svg className="group-hover:translate-y-12 transition ease-in-out duration-500 w-8 transform rotate-180" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
                    </span>
                      
                      {/* <svg className="w-8 transform -rotate-90 group-hover:scale-125 transition-transform ease-in-out duration-300" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg> */}
                      <span className="block font-bold transition-opacity ease-in-out duration-300 group-hover:opacity-60">Back to case studies</span>
                    </a>
                  </Link>

                  <h1 className="font-display block text-[42px] md:text-[5.7vw] 2xl:text-[85px] leading-none mb-5 md:mb-8 2xl:mb-12 pb-0">{title}</h1>

                  { deliverables?.length > 0 && (
                    <div className="mb-5 md:mb-8">
                      <span className="block font-bold text-lg md:text-xl mb-1 xl:text-2xl">Deliverables:</span>

                      <p className="block max-w-lg md:text-lg">
                      {deliverables.map((item, i) => {
                        return (
                          <span key={i}>
                            {item.title}{i !== deliverables.length - 1 && (<>,&nbsp;</>)}
                          </span>
                        )
                      })}
                      </p>
                    </div>
                  )}

                  {about && (
                    <div className="mb-5 md:mb-8">
                      <span className="block font-bold text-lg md:text-xl xl:text-2xl mb-1">About:</span>

                      <p className="block max-w-lg">{about}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2">

              </div>
            </div>
          </Container>
        </motion.div>
      </motion.section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  return pageService.fetchQuery(context)
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('caseStudy')
  return {
    paths: paths,
    fallback: true,
  };
}