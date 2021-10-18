import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import StarRatings from './react-star-ratings';
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MayYouNeed = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 800,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	const [product, setProduct] = useState([]);

	useEffect(() => {
			fetch("http://localhost:5000/allProduct")
				.then((res) => res.json())
				.then((data) => setProduct(data));
				console.log('ENTER');
		
	}, []);

	
	return (
		<div className="container ">
			<div className="row">
				<div className="col-md-12 mt-5">
					<div className="headingText">
						<h2>May You Need</h2>
					</div>
				</div>
				<div className="col-md-12 mb-5">
					{product && (
						 <Slider {...settings}>
								{product.map(pro=>(
									<div className="col-md-3 col-sm-6 mb-5">
									<div class="item">
										<div class="card cardStyle">
										<Link to={`/product/${pro.key}`}>
												<img src={`http://localhost:5000/${pro.imgOne}`} class="card-img-top" alt="..." />
											</Link>
											<div className="cardDownBack">
												<div class="card-body">
													<h5 class="card-title">{pro.name}</h5>
												</div>
												<div className="cardpriceText">
													<p class="card-text">
															$<span>{pro.price}</span>
													</p>
			
														<a href="#" class="btn HomeCartButton container">
														View Product
														</a>
												</div>
											</div>
											<div className="rating">
												<StarRatingComponent
													name={
														"rate"
													} /* name of the radio input, it is required */
													value={
														4.5
													} /* number of selected icon (`0` - none, `1` - first) */
													starCount={
														"5"
													} /* number of icons in rating, default `5` */
													starColor={
														"lime"
													} /* color of selected icons, default `#ffb400` */
													emptyStarColor={
														"gray"
													} /* color of non-selected icons, default `` */
													editing={
														Boolean
													} /* is component available for editing, default `true` */
												/>
											</div>
										</div>
									</div>
								</div>))}
						</Slider>
					)}
				</div>
			</div>
		</div>
	);
};

export default MayYouNeed;