import '../styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  )
}