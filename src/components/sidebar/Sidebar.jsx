import React from "react"
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-materialimport React from "react"
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidbarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="silebarList">
                        <li className="silebarListItem active">
                            <LineStyleIcon className="sidebarIcon" /> Home
                        </li>
                        <li className="silebarListItem">
                            <TimelineIcon className="sidebarIcon" /> Analitics
                        </li>
                        <li className="silebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"/> Sales
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="silebarList">
                        <li className="silebarListItem">
                            <PersonOutlineIcon className="sidebarIcon" /> Users
                        </li>
                        <li className="silebarListItem">
                            <StorefrontIcon className="sidebarIcon" /> Products
                        </li>
                        <li className="silebarListItem">
                            <ReceiptLongIcon className="sidebarIcon"/> Transactions
                        </li>
                        <li className="silebarListItem">
                            <SignalCellularAltIcon className="sidebarIcon"/> Reports
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="silebarList">
                        <li className="silebarListItem">
                            <MailOutlineIcon className="sidebarIcon" /> Mail
                        </li>
                        <li className="silebarListItem">
                            <DynamicFeedIcon className="sidebarIcon" /> Feedback
                        </li>
                        <li className="silebarListItem">
                            <ChatBubbleOutlineIcon className="sidebarIcon"/> Messages
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="silebarList">
                        <li className="silebarListItem">
                            <WorkOutlineIcon className="sidebarIcon" /> Manage
                        </li>
                        <li className="silebarListItem">
                            <TimelineIcon className="sidebarIcon" /> Analytics
                        </li>
                        <li className="silebarListItem">
                            <ReportIcon className="sidebarIcon"/> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}