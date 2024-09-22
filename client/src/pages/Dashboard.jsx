import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import Navbar2 from '../components/Navbar2'

import Sidebar from '../components/Sidebar'
import dashcss from '../styles/dashboard.module.scss'
function Dashboard() {
    return (
        <div className={`${dashcss.container} flexverti`}>
                <Navbar />
                {/* <Navbar2/> */}
                <div className={`${dashcss.mainbody} flexhori`}>
                    <Sidebar />
                    <div className={`${dashcss.middle}`}>
                        <Outlet/>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard