import React from 'react'
import "./feature.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
const Feature = () => {
    return (
        <div className="feature">
            <div className="featureItem">
                <span className="featureTitle">Revenue</span>
                <div className="featureMoney">
                    <span className="featureMoneys">$2,415</span>
                    <span className="featureMoneysRate">-11.4<ArrowDownward className="featureIcon negative"/></span>
                </div>
                <span className="featureSubTitle">Compare To Last Month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Sales</span>
                <div className="featureMoney">
                    <span className="featureMoneys">$2,415</span>
                    <span className="featureMoneysRate">-11.4<ArrowDownward className="featureIcon negative"/></span>
                </div>
                <span className="featureSubTitle">Compare To Last Month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="featureMoney">
                    <span className="featureMoneys">$2,515</span>
                    <span className="featureMoneysRate">+11.4<ArrowUpward className="featureIcon"/></span>
                </div>
                <span className="featureSubTitle">Compare To Last Month</span>
            </div>
        </div>
    )
}

export default Feature
