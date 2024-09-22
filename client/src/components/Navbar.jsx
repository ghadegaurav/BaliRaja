import React from 'react'
import logo from '../assets/logo.png'
import navcss from '../styles/navbar.module.scss'

function Navbar() {
    return (
        <div className={`${navcss.dashnav} flexhori`}>
            <div className={`${navcss.logo}`}>
                <img src={logo} alt="" />
            </div>
            <div className={`${navcss.searchbar} flexhori`}>
                    <i class="ri-search-line"/>
                <input placeholder='Search'></input>
                <i class="ri-close-large-line"></i>
            </div>
            <div className={`${navcss.notiicon} flexhori`}>
                <i class="ri-notification-2-line"></i>
            </div>
        </div>
    )
}

export default Navbar