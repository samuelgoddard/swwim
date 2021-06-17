import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '../../services/sanityPageService'
import ImageWrapper from '../../helpers/image-wrapper'

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
}
`

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

      <Header theme="white" contact={contact} pinned />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-white bg-noise text-blue overflow-hidden w-full min-h-screen"
      >
        <motion.div variants={fade} className="relative z-10">
          <div className="flex flex-wrap md:max-h-screen md:fixed md:inset-0 md:z-0">
            <div className="w-full md:w-1/2 md:pt-32 2xl:pt-40 flex items-center">
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="block md:hidden bg-blue">
                <ImageWrapper
                  image={images[0]}
                  className="w-full"
                  baseWidth={620}
                  baseHeight={620}
                  alt={title}
                />
              </div>
              <div className="hidden md:block bg-blue">
                <ImageWrapper
                  image={images[0]}
                  className="w-full h-full object-cover max-h-screen"
                  baseWidth={730}
                  baseHeight={1000}
                  alt={title}
                  fill="cover"
                />
              </div>
            </div>
          </div>

          <Container>
            <div className="flex flex-wrap md:min-h-screen relative md:z-10">
              <div className="w-full md:w-1/2 py-8 md:pt-32 md:pb-12 2xl:pt-40 2xl:pb-16 flex items-center">
                <div className="w-11/12 md:w-10/12">
                  <Link href="/case-studies">
                    <a className="flex flex-wrap space-x-3 items-center ring-white mb-8 md:mb-12 2xl:mb-16">
                      <svg className="w-8 transform -rotate-90" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
                      <span className="block font-bold">Back to case studies</span>
                    </a>
                  </Link>

                  <h1 className="font-display block text-[42px] md:text-[5.7vw] 2xl:text-[85px] leading-none mb-5 md:mb-8 2xl:mb-12 pb-0">{title}</h1>

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
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('caseStudy')
  return {
    paths: paths,
    fallback: true,
  };
}