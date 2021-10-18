import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
	const {value1, value2} = useContext(UserContext);
	const [cartApp, setCartApp] = value1;
	const [loggedInUser, setLoggedInUser] = value2;
	
	const [fixedTop, setScroll] = useState(true);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 10);
		});
	}, []);

	const cart = <FontAwesomeIcon icon={faShoppingCart} />;
	const signin = <FontAwesomeIcon icon={faSignInAlt} />;

	let history = useHistory();
	const [search, setSearch] = useState('')
	// console.log('.......................................',search);
	const handleBlur= (e)=>{
		const searchValue = e.target.value;
		setSearch(searchValue);
	}
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		console.log('......aaa.',search+"")
		history.push(`/search/${search+""}`);
	};


	return (
		<div>
			<header className="navHeader">
				<nav
					class={`navbar navbar-expand-lg navbar-dark bg-dark ps-3 px-3 true1`}
				>
					<div class="container-fluid">
						<h1><Link class="navbar-brand text-bold " to="/">
							ELECTRO
						</Link></h1>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item">
									<Link class="nav-link " aria-current="page" to="/category/Laptop">
										Laptop
									</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link " aria-current="page" to="/category/Phone">
										Phone
									</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link " aria-current="page" to="/category/Camera">
										Camera
									</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link " aria-current="page" to="/category/Accessories">
										Accessories
									</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link " aria-current="page" to="/category/Accessories">
										My Order
									</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" aria-current="page" to="/Admin">
										Admin.
									</Link>
								</li>
							</ul>
							<div className="ShoppingCart">
								{/* <div className="separatorCart"></div> */}
								{!loggedInUser.isLoggedIn && <Link to="/sign_in"><p className="UserNameNav">{signin} &nbsp;SignIn</p></Link> }
							</div>
							<div className="ShoppingCart">
								{/* <div className="separatorCart"></div> */}
								<Link to='/cart'>
								<p>
									{cart}&nbsp;<span>{cartApp.length}</span>
								</p>
								</Link>
							</div>

							<form onSubmit={handleSearchSubmit} class="d-flex">
								<input
									class="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
									name="search"
									required
									onBlur={handleBlur}
								/>
								<button class="btn btn-outline-success" type="submit">
									Search
								</button>
							</form>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
