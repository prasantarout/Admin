import React from 'react'
import "./topbar.css";
import ui from "../../img/ui.jpg";
 import{ NotificationsNone,Language,Settings} from '@material-ui/icons';
const Topbar = () => {
    return (
        <div className="topbar">
           <div className="topbarWrapper">
         <div className="topLeft">
             <span className="logo">
                 DEVFEEST
             </span>
         </div>
         <div className="topRight">
             <div className="topIconContainer">
             <NotificationsNone/>
             <span className="topIconBag">2</span>
             </div>
             <div className="topIconContainer">
             <Language/>
             </div>
             <div className="topIconContainer">
             <Settings/>
            </div>
            <img src={ui} alt="" className="topImg" /> 
         </div>
       </div> 
 </div>
    )
}

export default Topbar
