import React from 'react'
import "./widgetsmall.css";
import {Visibility} from "@material-ui/icons";
import photo from "../../img/photo.jpg";
const WidgetSmall = () => {
    return (
        <div className="widget">
            <span className="widgetSm">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={photo} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna KAnna</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                       <Visibility className="widgetIcon"/>
                       Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={photo} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna KAnna</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                       <Visibility className="widgetIcon"/>
                       Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={photo} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna KAnna</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                       <Visibility className="widgetIcon"/>
                       Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={photo} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna KAnna</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                       <Visibility className="widgetIcon"/>
                       Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={photo} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna KAnna</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                       <Visibility  className="widgetIcon"/>
                       Display
                    </button>
                </li>
                
                
            </ul>
        </div>
    )
}

export default WidgetSmall
