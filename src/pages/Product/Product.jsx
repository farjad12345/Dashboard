import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productsData } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";
function Product() {
  return (
    <div className="product">
      button
      <div className="productTitleContainer">
        <h1 className="product">Product</h1>
        <Link to={"/newproduct"}>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale In Month" data={productsData} dataKey="sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="/images/dell.jpg" alt="" className="ProductInfoImg" />
            <span className="productName"></span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoIteam">
              <div className="productInfoKey">Id:</div>
              <div className="productInfoValue">Dell</div>
            </div>
            <div className="productInfoIteam">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">$90000</div>
            </div>
            <div className="productInfoIteam">
              <div className="productInfoKey">Active:</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoIteam">
              <div className="productInfoKey">In Stock:</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productButtom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Dell LopTop" />
            <label>In Stock</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img
                src="/images/dell.jpg"
                alt="profile photo"
                className="productUploaderImg"
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Upload(Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
