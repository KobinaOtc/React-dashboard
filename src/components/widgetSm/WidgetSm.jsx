import React from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Current Users</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="user" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mr. Robot</span>
                        <span className="widgetSmUserTitle">Hacker</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="user" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mr. Robot</span>
                        <span className="widgetSmUserTitle">Hacker</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="user" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mr. Robot</span>
                        <span className="widgetSmUserTitle">Hacker</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="user" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mr. Robot</span>
                        <span className="widgetSmUserTitle">Hacker</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="user" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mr. Robot</span>
                        <span className="widgetSmUserTitle">Hacker</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
