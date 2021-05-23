import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Nextjs boilerplate - About</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="mb-12 md:mb-16 xl:mb-24"
      >
        <Container>
          <motion.div variants={fade}>
            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">About Page</h1>
            <div className="content max-w-3xl mb-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

              <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home Page" />
          </motion.div>
        </Container>
      </motion.div>

      <Footer />
    </Layout>
  )
}
