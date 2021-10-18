import React from "react";
import "./TopThreeSection.css";
import first from "../../../image/downslide/a1.jpg";
import second from "../../../image/downslide/a2.jpg";
import third from "../../../image/downslide/a3.jpg";
import { Link } from "react-router-dom";

const TopThreeSection = () => {
	return (
		<div className="TopThreeSection container mt-5 mb-5">
			<div className="row">
				<div className="col-sm-12 col-md-4 topThreeCol-4">
					<Link to="/product">
						<div className="topThreeCol topThreeColFirst">
							<div className="topThreeInside">
								<h4>Discount Product</h4>
								<p>20% to 40%</p>
								<p>Grave yours</p>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-sm-12 col-md-4 topThreeCol-4">
					<Link to="/product">
						<div className="topThreeCol topThreeColSecond">
							<div className="topThreeInside">
								<h4>New Arrival </h4>
								<p>Lets go</p>
								<p>Grave yours</p>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-sm-12 col-md-4 topThreeCol-4">
					<Link to="/product">
						<div className="topThreeCol topThreeColThird">
							<div className="topThreeInside">
								<h4>Top Ratting Product</h4>
								<p>Trusted</p>
								<p>Grave yours</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopThreeSection;
