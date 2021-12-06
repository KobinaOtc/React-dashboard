import React from 'react'
import "./product.css"
import { Link } from "react-router-dom"
import Chart from "../../charts/Chart"
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'

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
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="MacBook" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/356055/pexels-photo-356055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>    
                    </div>
                </form>
            </div>
        </div>
    )
}
