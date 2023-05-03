import React, { Children } from 'react'
import Navbarkot from './Navbarkot'
import Footerkot from './Footerkot'

export default function Layout({children}) {
  return (
    <>
        <Navbarkot></Navbarkot>
        <main>
            {children}
        </main>
        <Footerkot></Footerkot>
    </>
  )
}
