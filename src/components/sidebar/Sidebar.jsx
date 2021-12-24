import { LineStyle,Timeline,TrendingUp,Person,MarkunreadMailbox,
    AttachMoney,Equalizer,Mail ,DynamicFeed,ChatBubbleOutline,Accessibility,Error} from '@material-ui/icons';
import React from 'react'
import "./sidebar.css";
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapp">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems ">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItems">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">MENU</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems ">
                            <Person className="sidebarIcon"/>
                           Users
                        </li>
                        <li className="sidebarListItems">
                            <MarkunreadMailbox className="sidebarIcon"/>
                            Products
                        </li>
                        <li className="sidebarListItems">
                            <AttachMoney className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItems">
                            <Equalizer className="sidebarIcon"/>
                            Reports
                        </li>
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems ">
                            <Mail className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItems">
                            <DynamicFeed className="sidebarIcon"/>
                           feedback
                        </li>
                        <li className="sidebarListItems">
                            <ChatBubbleOutline className="sidebarIcon"/>
                           Messages
                        </li>
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Outsource</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems ">
                            <Accessibility className="sidebarIcon"/>
                            Manage
                        </li>
                       
                        <li className="sidebarListItems">
                            <Error className="sidebarIcon"/>
                            Reports
                        </li>
                        <li className="sidebarListItems">
                            <Error className="sidebarIcon"/>
                           Analysis
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
