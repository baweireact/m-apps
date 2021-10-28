import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>首页</title>
      </Head>
      <div>1</div>
      <div>
        <Link href="/light/home/Home">home</Link>
      </div>

    </div>
  )
}
