import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar () {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">REACT DASH--</span>
                </div>
                <div className="topright">
                    <div className="topbarIconsContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">3</span>
                    </div>

                    <div className="topbarIconsContainer">
                        <LanguageIcon />
                    </div>

                    <div className="topbarIconsContainer">
                        <SettingsIcon />
                    </div>
                    <img src={require("./profile.jpg")} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}