import React from "react";
import "./BestSellingProduct.css";
import leftup from "../../../image/bestselling/l1.jpg";
import leftDown from "../../../image/bestselling/l2.jpg";
import rightUP from "../../../image/bestselling/r1.jpg";
import rightDown from "../../../image/bestselling/r2.jpg";
import middleImage from "../../../image/bestselling/m4.jpg";
import { Link } from "react-router-dom";

const BestSellingProduct = () => {
	return (
		<div className="container mb-5">
			<div className="row">
				<div className="col-md-12">
					<div className="headingText">
						<h2>Best Selling Product</h2>
					</div>
				</div>
				<div className="col-md-3">
					<div className="col-md-12 BestSellingColTop12">
						<Link to="/category/Phone">
							<div className="BestSellingColT leftUp">
								<img src={leftup} alt="" />
							</div>
						</Link>
					</div>
					<div className="col-md-12">
						<Link to="/category/Accessories">
							<div className="BestSellingColT leftDown">
								<img src={leftDown} alt="" />
							</div>
						</Link>
					</div>
				</div>
				<div className="col-md-6">
					<Link to="/category/Laptop">
						<div className="BestSellingSIx">
							<img src={middleImage} alt="" />
						</div>
					</Link>
				</div>
				<div className="col-md-3">
					<div className="col-md-12">
						<Link to="/category/Camera">
							<div className="BestSellingColT rightUp">
								<img src={rightUP} alt="" />
							</div>
						</Link>
						<div className="col-md-12">
							<Link to="/category/Accessories">
								<div className="BestSellingColT rightDown">
									<img src={rightDown} alt="" />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestSellingProduct;
