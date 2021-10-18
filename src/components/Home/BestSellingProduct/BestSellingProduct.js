import React from "react";
import "./BestSellingProduct.css";
import leftup from "../../../image/bestselling/l1.jpg";
import leftDown from "../../../image/bestselling/l2.jpg";
import rightUP from "../../../image/bestselling/r1.jpg";
import rightDown from "../../../image/bestselling/r2.jpg";
import middleImage from "../../../image/bestselling/m4.jpg";

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
						<div className="BestSellingColT leftUp">
							<img src={leftup} alt="" />
						</div>
					</div>
					<div className="col-md-12">
						<div className="BestSellingColT leftDown">
							<img src={leftDown} alt="" />
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="BestSellingSIx">
                        <img src={middleImage} alt="" />
					</div>
				</div>
				<div className="col-md-3">
					<div className="col-md-12">
						<div className="BestSellingColT rightUp">
							<img src={rightUP} alt="" />
						</div>
						<div className="col-md-12">
							<div className="BestSellingColT rightDown">
								<img src={rightDown} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestSellingProduct;
