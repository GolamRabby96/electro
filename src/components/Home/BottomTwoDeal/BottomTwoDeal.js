import React from "react";
import { Link } from "react-router-dom";

const BottomTwoDeal = () => {
	return (
		<div className="TopThreeSection container mt-5 mb-5">
			<div className="row">
				<div className="col-sm-12 col-md-6 topThreeCol-4">
					<Link to="/product">
						<div className="topThreeCol topThreeColFirst">
							<div className="topThreeInside p-5">
								<h4>Its Electronics Deals</h4>
								<p className="fw-bolder">40% Flat</p>
								<p style={{ color: "#0010ff9c" }}>Free delivery world wide</p>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-sm-12 col-md-6 topThreeCol-4">
					<Link to="/product">
						<div className="topThreeCol topThreeColSecond">
							<div className="topThreeInside p-5">
								<h4>Brand Laptop Deal</h4>
								<p>40$ Flat</p>
								<p style={{ color: "#0010ff9c" }}>Free Delivery world wide</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BottomTwoDeal;
