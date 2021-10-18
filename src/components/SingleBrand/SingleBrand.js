import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleBrand.css";
import StarRatingComponent from "react-star-rating-component";

const SingleBrand = () => {
	const { name } = useParams([]);
    let BrandName = name.replace(/\s/g, "");

	const [product, setProduct] = useState([]);

	console.log(product);
	useEffect(() => {
		fetch(`http://localhost:5000/brand/${BrandName}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div className="container pt-5">
			<div className="row">
				{product &&
					product.map((pro) => (
						<div className="col-md-3 col-sm-6 mb-5">
							<div class="item">
								<div class="card cardStyle">
									<Link to={`/product/${pro.key}`}>
										<img
											src={`http://localhost:5000/${pro.imgOne}`}
											class="card-img-top"
											alt="..."
										/>
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
												Add To Cart
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
						</div>
					))}
			</div>
		</div>
	);
};

export default SingleBrand;
