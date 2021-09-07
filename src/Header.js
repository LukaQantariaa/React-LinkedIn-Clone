import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.js'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import Chat from '@material-ui/icons/Chat'
import Notifications from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div className="header">

            <div className="header__wrapper">

                <div className="header__left">
                    <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                    <div className="header__search">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="header__right">
                    <HeaderOption title="Home" Icon={HomeIcon} />
                    <HeaderOption title="My Network" Icon={SupervisorAccount} />
                    <HeaderOption title="Jobs" Icon={BusinessCenter} />
                    <HeaderOption title="Messaging" Icon={Chat} />
                    <HeaderOption title="Notifications" Icon={Notifications} />
                    <HeaderOption avatar="https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" title="me" />
                </div>

            </div>

        </div>
    )
}

export default Header
