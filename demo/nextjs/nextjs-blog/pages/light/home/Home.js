import React from 'react'
import Head from 'next/head'

export default function Home({ serverSideList }) {
  return (
    <div className="m-wrap">
      <Head>
        <title>home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hello
      <div>
        {/* {list.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))} */}
        {serverSideList.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  )
}

// export async function getStaticProps() {
//   const list = [
//     {
//       id: 0,
//       title: 'xu1',
//     },
//     {
//       id: 1,
//       title: 'admin',
//     },
//   ]
//   return {
//     props: {
//       list,
//     },
//   }
// }

export async function getServerSideProps(context) {
  console.log(context.query)
  const serverSideList = [
    {
      id: 0,
      title: 'xu_s',
    },
    {
      id: 1,
      title: 'admin_s',
    },
  ]
  return {
    props: {
      serverSideList,
    },
  }
}
