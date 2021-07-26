import React from 'react'
import { html2json, json2html } from 'html2json'

export default function Index() {
  const data = `<p></p>
  <div style="text-align:right;"><img src="http://test-images.qi.work/course/2021-07-01/bbbe7816252340aa8049bcab3b0370ac.jpg" alt="image" style="height: auto;width: auto"/></div>
  <p></p>`

  const htmlFormat = (data) => {
    const json = html2json(data)
    console.log(json)
    const html = json2html(json)
    return html
  }

  const result = htmlFormat(data)
  console.log(result)

  return <div>1</div>
}
