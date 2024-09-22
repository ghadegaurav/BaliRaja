import React from 'react'
import Navbar from '../components/Navbar'

import Sidebar from '../components/Sidebar'
import pagecss from '../styles/page.module.scss'

function page1() {
  return (
    <>
      <div className={`${pagecss.container} flexhori`}>
        <h1>I am going to win this Hackthon For Sure!!!!</h1>
      </div>
    </>
  )
}

export default page1