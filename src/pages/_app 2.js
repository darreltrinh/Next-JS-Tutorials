import Head from 'next/head'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import '@/styles/globals.css'
import '@/styles/layout.css'

export default function App({ Component, pageProps }) {
  
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
  <>
    <Head>
      <title>wavey</title>
      <meta name='description' content='all things wavey' />
    </Head>
    <Header />
    <Component {...pageProps} /> 
    <Footer />
  </>
  )
}
