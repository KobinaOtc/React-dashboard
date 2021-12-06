import React from 'react'
import "./product.css"
import { Link } from "react-router-dom"
import Chart from "../../charts/Chart"
import { productData } from '../../dummyData'

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} title="Sales Performance" dataKey="Sales" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/356055/pexels-photo-356055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="productInfoImg" />
                        <span className="productName">MacBook</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">3444</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sale:</span>
                            <span className="productInfoValue">36543</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom"></div>
        </div>
    )
}
