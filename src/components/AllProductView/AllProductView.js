import React, { useEffect, useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import "./AllProductView.css";
import { useParams } from "react-router-dom";

const AllProductView = () => {
	let { name } = useParams();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/category/${name}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [name]);


	let BrandName =[];
	product.map(proName => {
		BrandName.push(proName.brand);
	})
	let uniqueBrand = [];
	BrandName.forEach((c) => {
		let spaceRemove = c.replace(/\s/g, "");
		if (!uniqueBrand.includes(spaceRemove)) {
			uniqueBrand.push(spaceRemove);
		}
	});	


	return (
		<div className="container-fluid">
			<div className="row">
				<div className="pb-5">
					<nav class="navbar navbar-dark bg-light fixed-top">
						<div class="">
							<button
								class="navbar-toggler"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasNavbar"
								aria-controls="offcanvasNavbar"
							>
								<span class="navbar-toggler-icon navbar-toggler-icon-custom"></span>
							</button>
							<div
								class="offcanvas offcanvasedit offcanvas-end"
								tabindex="-1"
								id="offcanvasNavbar"
								aria-labelledby="offcanvasNavbarLabel"
							>
								<div class="offcanvas-header">
									<h5 class="offcanvas-title" id="offcanvasNavbarLabel">
										Electro
									</h5>
									<button
										type="button"
										class="btn-close text-reset"
										data-bs-dismiss="offcanvas"
										aria-label="Close"
									></button>
								</div>
								<div class="offcanvas-body text-dark">
									<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
										{uniqueBrand && uniqueBrand.map(ub=>(
											<li class="nav-item">
											<Link class="nav-link customNavLInk" to={`/brand/${ub}`}>
												{ub}
											</Link>
										</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div className="col-md-12">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllProductView;
