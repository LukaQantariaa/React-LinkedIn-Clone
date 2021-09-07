import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://4kwallpapers.com/images/walls/thumbs_3t/1455.jpg" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Luka Qantaria</h2>
                <h4>l_kantaria@cu.edu.ge</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">
                        2,450
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("react")}
                {recentItem("react")}
                {recentItem("react")}
            </div>
        </div>
    )
}

export default Sidebar
