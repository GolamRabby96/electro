import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const SearchProduct = () => {
	const search  = useParams([]);
	const [product, setProduct] = useState([]);
	console.log('......',search)
	console.log(product,'......',search)
	useEffect(() => {
		fetch(`http://localhost:5000/search/${search.name}`)
			.then((response) => response.json())
			.then((data) => setProduct(data));
	}, [search]);

	return (
		<div className="SearchProduct container mt-5">
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
				{!product.length  && 
					<div className="col-md-12 mt-5">
						<h2 className="bg-info text-center">No Result Found</h2>
					</div>
				}
			</div>
		</div>
	);
};

export default SearchProduct;
