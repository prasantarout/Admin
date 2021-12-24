import React from 'react'
import Chart from '../../components/chart/Chart';
import Feature from '../../components/feature/Feature';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLg from "../../components/widgetLg/widgetLg";
import "./home.css";
import { UserData } from '../../dommydata';
const home = () => {
    return (
        <div className="home">
            <Feature/>
            <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidget">
                <WidgetSmall/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default home

