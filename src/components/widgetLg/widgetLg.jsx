import React from 'react'
import "./widgetLg.css";
import ui from "../../img/ui.jpg";
const widgetLg = () => {
    const Button =({type})=>{
        return <button className={"widgetLgBtn " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgth">Customer</th>
                    <th className="widgetLgth">Date</th>
                    <th className="widgetLgth">Amount</th>
                    <th className="widgetLgth">Status</th>
                    
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={ui} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDt">2 june 2021</td>
                    <td className="widgetLgAmount">$254</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={ui} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDt">2 june 2021</td>
                    <td className="widgetLgAmount">$254</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={ui} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDt">2 june 2021</td>
                    <td className="widgetLgAmount">$254</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={ui} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDt">2 june 2021</td>
                    <td className="widgetLgAmount">$254</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                
            </table>
        </div>
    )
}

export default widgetLg
