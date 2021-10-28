import React from 'react'

export default function blog({ params }) {
  return <div>{params.id}</div>
}

export async function getStaticProps({ params }) {
  return {
    props: {
      params
    },
  }
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
  ]
  return {
    paths,
    fallback: false,
  }
}
