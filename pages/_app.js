import '../styles/main.css'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <DefaultSeo
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        noindex={true}
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!
        titleTemplate = "%s | Swwim"
        defaultTitle="Social, Digital &amp; Content Creation"
        description="We specialise in influencer marketing, social media, content creation and copywriting. Our experience spans lifestyle, health and beauty and home and interiors."
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://swwim.vercel.app/',
          site_name: 'Swwim',
          images: [
            {
              url: '/images/social-share.jpg',
              width: 800,
              height: 600
            },
          ]
        }}
        twitter={{
          handle: '@weswwim',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      
      { pageProps.preview && <><div className={'fixed bottom-0 w-full p-1 bg-red bg-opacity-100 text-white justify-center flex z-30'}>Preview Mode - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a></div></> }
      
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}