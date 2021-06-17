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
import SanityPageService from '../../services/sanityPageService'
import ImageWrapper from '../../helpers/image-wrapper'
import spacetime from 'spacetime'

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
    firstName,
    lastName,
    image {
      asset -> {
        ...
      }
    }
  },
  date,
  introText,
  title
}`

const pageService = new SanityPageService(query)

export default function NewsSlug(initialData) {
  const { data: { seo, heroImage, categories, author, date, introText, title }  } = pageService.getPreviewHook(initialData)()

  let d = spacetime(date)
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
                <h1 className="block font-display text-[8.45vw] md:text-[4.55vw] lg:text-[4.25vw] 2xl:text-[70px] leading-none relative z-10 text-left align-middle">
                  {title}
                  {author && (
                    <span className="block lg:inline-block align-middle mt-2 lg:mt-0 lg:ml-6">
                      <span className="font-display md:ml-auto flex flex-wrap items-center order-1 md:order-2 mb-3 md:mb-0 text-base">
                        <span className="block">By {author.firstName}</span>
                        { author.image && (
                          <div className="w-10 h-10 rounded-full border-white border-2 ml-3">
                            <ImageWrapper
                              image={author.image.asset}
                              className="rounded-full"
                              baseWidth={350}
                              baseHeight={350}
                              alt={author.firstName}
                            />
                          </div>
                        )}
                      </span>
                    </span>
                  )}
                </h1>
              </div>

              <div className="flex flex-wrap md:-mx-6 2xl:-mx-10">
                <div className="w-full md:w-1/2 md:px-6 2xl:px-10 mb-6 md:mb-0">
                  <div className="flex flex-wrap min-h-full">
                    <div className="self-start mb-auto w-full">
                      <div className="w-full flex flex-wrap items-end md:items-center pb-3 md:pb-5 md:pt-5 border-b border-white mb-4 md:mb-6 2xl:mb-8">
                        <div className="md:flex md:flex-wrap">
                          {categories?.map((cat, i) => (
                            <span key={i} className="font-display uppercase text-sm mb-1 md:mb-0 mr-3 md:mr-5 block">{cat.title}</span>
                          ))}
                          
                          {date && (
                            <span className={`font-display uppercase text-sm mb-1 md:mb-0 opacity-60 mr-3 md:mr-6 block ${categories ? '2xl:px-10' : '2xl:pr-10'}`}>{d.unixFmt('dd.MM.yy')}</span>
                          )}
                        </div>
                        <span className="ml-auto font-display text-sm mb-1 md:mb-0 block">2 Minute Read</span>
                      </div>
                      
                      {introText && (
                        <p className="block font-bold text-xl md:text-xl lg:text-2xl xl:text-3xl w-full self-start mb-auto pb-10">{introText}</p>
                      )}
                    </div>
                    
                    <div className="self-end mt-auto">
                      <span className="font-display uppercase text-sm opacity-60 block mb-3">Share</span>
                      
                      {/* @TODO Wire up social sharing... */}
                      <div className="flex flex-wrap items-center space-x-6">
                        <a href="https://www.facebook.com/weswwim" className="block ring-white" target="_blank" rel="noopener noreferrer">
                          <svg className="w-2" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.64 15.364h3.155V7.616h2.2l.235-2.593H4.795V3.545c0-.611.125-.853.728-.853H7.23V0H5.046C2.699 0 1.64 1.014 1.64 2.955v2.068H0v2.626h1.64v7.715z" fill="#fff"/></svg>
                        </a>

                        <a href="https://twitter.com/weswwim" className="block ring-white" target="_blank" rel="noopener noreferrer">
                          <svg className="w-4" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M.732 11.855a9.358 9.358 0 004.98 1.6c6.085.178 9.674-4.799 9.603-9.358A6.604 6.604 0 0017 2.47a6.618 6.618 0 01-1.897.455c.688-.38 1.227-1 1.494-1.749a6.635 6.635 0 01-2.104.726A3.29 3.29 0 0012.13.809C10.015.747 8.402 2.652 8.82 4.69a9.335 9.335 0 01-6.654-3.58 3.217 3.217 0 00.885 4.353 3.297 3.297 0 01-1.473-.45c-.08 1.5.967 2.934 2.533 3.293a3.32 3.32 0 01-1.48.012 3.273 3.273 0 002.993 2.337 6.652 6.652 0 01-4.892 1.199z" fill="#fff"/></svg>
                        </a>

                        <a href="https://www.instagram.com/weswwim" className="block ring-white" target="_blank" rel="noopener noreferrer">
                          <svg className="w-4" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.48754 0C6.36676 0 6.10083 0.00915058 5.26819 0.0481253C4.43688 0.0867611 3.86917 0.221308 3.37284 0.418554C2.85925 0.62224 2.42367 0.894724 1.98975 1.33802C1.55551 1.78097 1.28825 2.22562 1.08906 2.74958C0.895835 3.25659 0.763701 3.83613 0.725854 4.68476C0.688007 5.53475 0.678711 5.80621 0.678711 7.97117C0.678711 10.1358 0.688007 10.4073 0.725854 11.2576C0.763701 12.1059 0.895835 12.6854 1.08906 13.1924C1.28825 13.7167 1.55551 14.161 1.98975 14.6043C2.42367 15.0473 2.85925 15.3201 3.37284 15.5238C3.86917 15.7207 4.43688 15.8556 5.26819 15.8942C6.10083 15.9329 6.36676 15.9423 8.48754 15.9423C10.6083 15.9423 10.8739 15.9329 11.7066 15.8942C12.5379 15.8556 13.1056 15.7207 13.6022 15.5238C14.1155 15.3201 14.5514 15.0473 14.985 14.6043C15.4192 14.161 15.6865 13.7167 15.8857 13.1924C16.0789 12.6854 16.211 12.1059 16.2489 11.2576C16.2867 10.4073 16.296 10.1358 16.296 7.97117C16.296 5.80621 16.2867 5.53475 16.2489 4.68476C16.211 3.83613 16.0789 3.25659 15.8857 2.74958C15.6865 2.22562 15.4192 1.78097 14.985 1.33802C14.5514 0.894724 14.1155 0.62224 13.6022 0.418554C13.1056 0.221308 12.5379 0.0867611 11.7066 0.0481253C10.8739 0.00915058 10.6083 0 8.48754 0ZM8.48792 1.43631C10.5725 1.43631 10.8195 1.44445 11.6432 1.48274C12.4044 1.51799 12.8178 1.64813 13.093 1.75726C13.4575 1.90164 13.7175 2.07448 13.9907 2.3534C14.2639 2.63233 14.4333 2.89803 14.575 3.26982C14.6816 3.55077 14.8091 3.97306 14.8439 4.75018C14.8815 5.59068 14.8891 5.84283 14.8891 7.97118C14.8891 10.0995 14.8815 10.3513 14.8439 11.1918C14.8091 11.9693 14.6816 12.3916 14.575 12.6722C14.4333 13.0443 14.2639 13.3097 13.9907 13.589C13.7175 13.8675 13.4575 14.0404 13.093 14.1851C12.8178 14.2942 12.4044 14.424 11.6432 14.4596C10.8195 14.4979 10.5728 14.5061 8.48792 14.5061C6.40266 14.5061 6.15599 14.4979 5.33265 14.4596C4.57105 14.424 4.15772 14.2942 3.8825 14.1851C3.51797 14.0404 3.25802 13.8675 2.98479 13.589C2.71189 13.3097 2.54257 13.0443 2.40081 12.6722C2.29391 12.3916 2.16642 11.9693 2.13156 11.1918C2.09405 10.3513 2.08641 10.0995 2.08641 7.97118C2.08641 5.84283 2.09405 5.59068 2.13156 4.75018C2.16642 3.97306 2.29391 3.55077 2.40081 3.26982C2.54257 2.89803 2.71189 2.63233 2.98479 2.3534C3.25802 2.07448 3.51797 1.90164 3.8825 1.75726C4.15772 1.64813 4.57105 1.51799 5.33265 1.48274C6.15599 1.44445 6.403 1.43631 8.48792 1.43631Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.48689 10.6281C7.04935 10.6281 5.88372 9.43855 5.88372 7.97107C5.88372 6.50359 7.04935 5.31401 8.48689 5.31401C9.92409 5.31401 11.0897 6.50359 11.0897 7.97107C11.0897 9.43855 9.92409 10.6281 8.48689 10.6281ZM8.48736 3.87781C6.27263 3.87781 4.47754 5.71063 4.47754 7.97117C4.47754 10.2317 6.27263 12.0642 8.48736 12.0642C10.7018 12.0642 12.4969 10.2317 12.4969 7.97117C12.4969 5.71063 10.7018 3.87781 8.48736 3.87781Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.5929 3.71611C13.5929 4.24447 13.1732 4.67251 12.656 4.67251C12.1384 4.67251 11.7188 4.24447 11.7188 3.71611C11.7188 3.18775 12.1384 2.7597 12.656 2.7597C13.1732 2.7597 13.5929 3.18775 13.5929 3.71611Z" fill="white"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {heroImage?.asset && (
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
                    <span className="block">By {author.firstName}</span>
                    { author.image && (
                      <div className="w-10 h-10 rounded-full border-white border-2 ml-3">
                        <ImageWrapper
                          image={author.image.asset}
                          className="rounded-full"
                          baseWidth={350}
                          baseHeight={350}
                          alt={author.firstName}
                        />
                      </div>
                    )}
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