import React from "react"
import "./featuredInfo.css"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function FeaturedInfo () {
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,748</span>
                    <span className="featuredMoneyRate">-12.1 <ArrowCircleDownIcon className="featuredIcon negative" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,452</span>
                    <span className="featuredMoneyRate">-2.1 <ArrowCircleDownIcon className="featuredIcon negative" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,748</span>
                    <span className="featuredMoneyRate">+2.2 <ArrowCircleUpIcon className="featuredIcon" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}