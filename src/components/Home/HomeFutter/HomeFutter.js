import React from "react";
import "./HomeFutter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";
import {

} from "@fortawesome/free-brands-svg-icons";
const HomeFutter = () => {
	const arrow = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
	return (
		<div className=" homeFuter">
			<div className="container">
				<div className="row">
					<div className=" col-6 col-sm-6 col-md-3">
						<div className="futterElement">
							<ul>
								<a href=""><li><span>{arrow}</span>Prices Drop</li></a>
								<a href=""><li><span>{arrow}</span>New Products</li></a>
								<a href=""><li><span>{arrow}</span>Best Sales</li></a>
								<a href=""><li><span>{arrow}</span>Contact Us</li></a>
								<a href=""><li><span>{arrow}</span>Stores</li></a>			
							</ul>
						</div>
					</div>
					<div className=" col-6 col-sm-6 col-md-3">
                    <div className="futterElement">
							<ul>
								<a href=""><li><span>{arrow}</span>Prices Drop</li></a>
								<a href=""><li><span>{arrow}</span>New Products</li></a>
								<a href=""><li><span>{arrow}</span>Best Sales</li></a>
								<a href=""><li><span>{arrow}</span>Contact Us</li></a>
								<a href=""><li><span>{arrow}</span>Stores</li></a>			
							</ul>
						</div>
					</div>
					<div className=" col-6 col-sm-6 col-md-3">
                   		 <div className="futterElement">
							<ul>
								<a href=""><li><span>{arrow}</span>Prices Drop</li></a>
								<a href=""><li><span>{arrow}</span>New Products</li></a>
								<a href=""><li><span>{arrow}</span>Best Sales</li></a>
								<a href=""><li><span>{arrow}</span>Contact Us</li></a>
								<a href=""><li><span>{arrow}</span>Stores</li></a>			
							</ul>
						</div>
					</div>
					<div className=" col-6 col-sm-6 col-md-3">
                   		 <div className="futterElement">
							<ul>
								<a href=""><li><span>{arrow}</span>Prices Drop</li></a>
								<a href=""><li><span>{arrow}</span>New Products</li></a>
								<a href=""><li><span>{arrow}</span>Best Sales</li></a>
								<a href=""><li><span>{arrow}</span>Contact Us</li></a>
								<a href=""><li><span>{arrow}</span>Stores</li></a>			
							</ul>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default HomeFutter;
