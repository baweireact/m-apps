import React from 'react'
import Head from 'next/head'

export default function Home({ list }) {
  return (
    <div className="m-wrap">
      <Head>
        <title>home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hello
      <div>
        {
          list.map(item => (
            <div key={item.id}>{item.title}</div>
          ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const list = [
    {
      id: 0,
      title: 'xu',
    },
    {
      id: 1,
      title: 'admin',
    },
  ]
  return {
    props: {
      list,
    },
  }
}
