import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'
import NewsCarousel from '../../components/news-carousel'
import { NextSeo } from 'next-seo'
import SanityPageService from '../../services/SanityPageService'
import ImageWrapper from '../../helpers/image-wrapper'

const query = `*[_type == "news" && slug.current == $slug][0]{
  seo {
    ...,
    shareGraphic {
      asset->
    }
  },
  heroImage {
    asset -> {
      ...
    }
  },
  categories[]-> {
    title
  },
  author-> {
    name,
    image {
      asset -> {
        ...
      }
    }
  },
  introText,
	title
}`

const pageService = new SanityPageService(query)

export default function NewsSlug(initialData) {
  const { data: { title, seo, introText, categories, heroImage, author }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo
        title={seo?.metaTitle ? seo?.metaTitle : title }
        description={seo?.metaDesc ? seo?.metaDesc : introText}
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

      <Header />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blue bg-noise text-white pb-8 md:pb-16 2xl:pb-24"
      >
        <motion.div variants={fade} className="relative z-10 overflow-hidden">
          <Container>
            <div className="relative overflow-visible">

              <div className="flex mb-5 md:mb-8 2xl:mb-12">
                <Link href="/news">
                  <a className="flex flex-wrap space-x-3 items-center ring-white">
                    <svg className="w-8 transform -rotate-90" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
                    <span className="block font-bold">Back to Articles</span>
                  </a>
                </Link>
              </div>

              <div className="relative mb-12 md:mb-20 lg:mb-24 2xl:mb-24 w-11/12 md:w-10/12">
                <h1 className="block font-display text-[8.45vw] md:text-[4.55vw] lg:text-[4.25vw] 2xl:text-[70px] leading-none relative z-10 text-left">{title}</h1>
              </div>

              <div className="flex flex-wrap md:-mx-6 2xl:-mx-10">
                <div className="w-full md:w-1/2 md:px-6 2xl:px-10 mb-6 md:mb-0">
                  <div className="flex flex-wrap min-h-full">
                    <div className="self-start mb-auto">
                      <div className="w-full flex flex-wrap items-end md:items-center pb-3 md:pb-5 md:pt-5 border-b border-white mb-4 md:mb-6 2xl:mb-8">
                        <div className="md:flex md:flex-wrap">
                          {categories.map((cat, i) => (
                            <span kcaty={i} className="font-display uppercase text-sm mb-1 md:mb-0 mr-3 md:mr-5 block">{cat.title}</span>
                          ))}
                          
                          {/* @TODO - Wire up */}
                          <span className="font-display uppercase text-sm mb-1 md:mb-0 opacity-60 mr-3 md:mr-6 2xl:px-10 block">22.01.21</span>
                        </div>
                        <span className="ml-auto font-display text-sm mb-1 md:mb-0 block">2 Minute Read</span>
                      </div>
                      
                      {introText && (
                        <p className="block font-bold text-xl md:text-xl lg:text-2xl xl:text-3xl w-full self-start mb-auto pb-10">{introText}</p>
                      )}
                    </div>

                    <span className="font-display uppercase text-sm opacity-60 block self-end mt-auto">Share</span>
                  </div>
                </div>
                {heroImage.asset && (
                  <div className="w-full md:w-1/2 md:px-6 2xl:px-10">
                    <Image
                      width={heroImage.asset.metadata.dimensions.width}
                      height={heroImage.asset.metadata.dimensions.height}
                      layout="responsive" src={heroImage.asset.url}
                      alt={heroImage.asset.originalFileName}
                      className="w-full"
                      priority
                    />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </motion.div>
      </motion.section>
      
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-white bg-noise text-blue py-8 md:py-12 2xl:py-16"
      >
        <motion.div variants={fade} className="relative z-10 overflow-hidden">
          <Container>
            {/* Content Block */}
            <div className="w-full md:w-7/12 xl:w-1/2 content content--large">
              <h2>This is a H2 Title</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

              <ul>
                <li>Bulleted Number Style. Aliquet diam lectus adipiscing eget elementum gravida congue lectus.</li>
                <li>Bulleted Number Style. Aliquet diam lectus adipiscing eget elementum gravida congue lectus.</li>
                <li>Bulleted Number Style. Aliquet diam lectus adipiscing eget elementum gravida congue lectus.</li>
              </ul>
            </div>
            
            {/* Image / Quote */}
            <div className="w-full flex flex-wrap my-8 md:my-12 2xl:my-16 md:-mx-4 2xl:-mx-10">
              <div className="w-full md:w-7/12 lg:w-8/12 md:px-4 2xl:px-10">
                <figure>
                  <div className="bg-blue">
                    <Image width={720} height={420} layout="responsive" src="https://placedog.net/720/420" alt="Placeholder Dog" className="w-full" />
                  </div>
                  <figcaption className="opacity-60 md:text-lg leading-tight block font-medium mt-2">Carousel Caption - Aenean lacinia bibendum nulla sed consectetur.</figcaption>
                </figure>
              </div>
              <div className="w-full md:w-5/12 lg:w-4/12 md:px-4 2xl:px-10">
                <div className="border-b md:border-t md:border-b-0 border-brown pb-5 md:pb-0 pt-5 md:pt-8 2xl:pt-10">
                  <span className="block font-display text-4xl md:text-5xl 2xl:text-6xl leading-none mb-2 md:mb-0 pb-0">“</span>
                  <p className="block font-display text-xl md:text-xl lg:text-2xl xl:text-3xl -mt-5 leading-tight md:leading-tight 2xl:leading-tight mb-3 md:mb-4">Curabitur blandit tempus porttitor. Morbi leo lorem ipsum dolor sit</p>

                  <div className="">
                    <span className="block md:text-lg leading-snug"><span className="font-bold">Laura Farrand</span>, Head of PR</span>
                    <span className="block leading-snug text-sm md:text-base">Givenchy Perfumes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full md:w-7/12 xl:w-1/2 content content--large">
              <h3>This is a H3 Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

              <ol>
                <li>Bulleted Number Style. Aliquet diam lectus adipiscing eget elementum gravida congue lectus.</li>
                <li>Bulleted Number Style. Aliquet diam lectus adipiscing eget elementum gravida congue lectus.</li>
                <li>Bulleted Number Style. Aliquet diam lectus adipiscing eget elementum gravida congue lectus.</li>
              </ol>
            </div>

            {/* Stat Block */}
            <div className="w-full md:w-7/12 xl:w-1/2 my-8 md:my-12 2xl:my-16">
              <div className="bg-blue text-white p-6 md:p-8 2xl:p-10">
                <span className="block font-display text-2xl md:text-2xl lg:text-3xl mb-6 md:mb-8 2xl:mb-12">Stat Title Placeholder</span>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="">
                    <span className="block font-display text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl">XX</span>
                    
                    <span className="block opacity-50 w-10/12 leading-snug">Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                  </div>

                  <div className="">
                    <span className="block font-display text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl">XX</span>
                    
                    <span className="block opacity-50 w-10/12 leading-snug">Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full md:w-7/12 xl:w-1/2 content content--large">
              <h3>This is a H3 Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>

            {/* Image / Quote */}
            <div className="w-full flex flex-wrap my-8 md:my-12 2xl:my-16 md:-mx-4 2xl:-mx-10">
              <div className="w-full md:w-7/12 lg:w-8/12 md:px-4 2xl:px-10">
                <figure>
                  <div className="bg-blue">
                    <Image width={720} height={420} layout="responsive" src="https://placedog.net/720/420" alt="Placeholder Dog" className="w-full" />
                  </div>
                  <figcaption className="opacity-60 md:text-lg leading-tight block font-medium mt-2">Carousel Caption - Aenean lacinia bibendum nulla sed consectetur.</figcaption>
                </figure>
              </div>
              <div className="w-full md:w-5/12 lg:w-4/12 md:px-4 2xl:px-10">
                <div className="border-b md:border-t md:border-b-0 border-brown pb-5 md:pb-0 pt-5 md:pt-8 2xl:pt-10">
                  <span className="block font-display text-4xl md:text-5xl 2xl:text-6xl leading-none mb-2 md:mb-0 pb-0">“</span>
                  <p className="block font-display text-xl md:text-xl lg:text-2xl xl:text-3xl -mt-5 leading-tight md:leading-tight 2xl:leading-tight mb-3 md:mb-4">Curabitur blandit tempus porttitor. Morbi leo lorem ipsum dolor sit</p>

                  <div className="">
                    <span className="block md:text-lg leading-snug"><span className="font-bold">Laura Farrand</span>, Head of PR</span>
                    <span className="block leading-snug text-sm md:text-base">Givenchy Perfumes</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Block */}
            <div className="w-full md:w-7/12 xl:w-1/2 content content--large">
              <h3>This is a H3 Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>

            {/* Inline Quote */}
            <div className="border-l-2 border-brown pl-5 md:pl-6 xl:pl-8 2xl:pl-10 w-full md:w-7/12 xl:w-1/2 my-8 md:my-12 2xl:my-16 py-2">
              <p className="block font-display text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl leading-tight md:leading-tight 2xl:leading-tight mb-3 md:mb-4">“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus.”</p>

              <div className="">
                <span className="block md:text-lg leading-snug">Laura Farrand, Head of PR, Givenchy Perfumes</span>
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full md:w-7/12 xl:w-1/2 content content--large">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="w-full md:w-7/12 xl:w-1/2 pt-8 md:pt-12 2xl:pt-16 mb-8 md:mb-12 2xl:mb-16">
              <div className="mb-8 md:mb-12 2xl:mb-16">
                <span className="font-display uppercase text-sm opacity-60 block self-end mt-auto">Share</span>
              </div>

              <div className="flex flex-wrap items-center border-t border-blue border-opacity-25 pt-8 md:pt-12 2xl:pt-16">
                <div className="flex w-full md:w-auto order-2 md:order-1">
                  <Link href="/news">
                    <a className="flex flex-wrap space-x-3 items-center ring-white">
                      <svg className="w-8 transform -rotate-90" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
                      <span className="block font-bold">Back to Articles</span>
                    </a>
                  </Link>
                </div>
                
                { author && (
                  <span className="font-display md:ml-auto flex flex-wrap items-center order-1 md:order-2 mb-3 md:mb-0">
                    <span className="block">By {author.name}</span>
                    <div className="w-10 h-10 rounded-full border-white border-2 ml-3">
                      <ImageWrapper
                        image={author.image.asset}
                        className="rounded-full"
                        baseWidth={350}
                        baseHeight={350}
                        alt={author.name}
                      />
                    </div>
                  </span>
                )}
              </div>
            </div>

            <div className="w-full mb-8 md:mb-12 2xl:mb-16 z-10">
              <span className="block font-display uppercase text-[20vw] md:text-[21.75vw] 2xl:text-[336px] leading-none relative text-center">SWWIM©</span>
            </div>
          </Container>

          <div className="w-full z-10 border-t border-blue border-opacity-20 pt-12 md:pt-24 2xl:pt-32 mb-8 md:mb-12">
            <span className="block text-center mb-8 md:mb-12 2xl:mb-16 font-display text-[6.45vw] md:text-[4.55vw] lg:text-[4.25vw] 2xl:text-[70px] leading-none relative z-10">Continue Reading</span>

            <NewsCarousel />
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div variants={fade} className="relative z-10 overflow-hidden">
          <Footer />
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
  const paths = await pageService.fetchPaths('news')
  return {
    paths: paths,
    fallback: true,
  };
}