import '../static/css/index.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>hello</title>
        <link rel="icon" href={`${process.env.basePath}/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
