import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchProduct from "./components/Home/SearchProduct/SearchProduct";
import AllProductView from "./components/AllProductView/AllProductView";
import SingleProductView from "./components/SingleProductView/SingleProductView";
import Admin from "./Admin/Admin";
import Cart from "./components/Cart/Cart";
import { createContext, useEffect, useState } from "react";
import SingleBrand from "./components/SingleBrand/SingleBrand";
import SignIn from "./components/SignIn/SignIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProcessPayment from "./components/ProcessPayment/ProcessPayment";
import jwt from "jwt-decode";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

export const UserContext = createContext();

function App() {
	const [cartApp, setCartApp] = useState([]);
	const [loggedInUser, setLoggedInUser] = useState({
		isLoggedIn: false,
		displayName: "",
		email: "",
	});

	console.log(loggedInUser);

	useEffect(() => {
		const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");
		setCartApp(initialCart);
	}, [cartApp.length]);

	useEffect(() => {
		const token = sessionStorage.getItem("userToken");
		if (token) {
			const find = jwt(token);
			let getUserInfo = {
				isLoggedIn: true,
				displayName: find.name,
				email: find.email,
			};
			setLoggedInUser(getUserInfo);
		}
	}, []);

	return (
		<UserContext.Provider
			value={{
				value1: [cartApp, setCartApp],
				value2: [loggedInUser, setLoggedInUser],
			}}
		>
			<Router>
				<div className="App">
					<Navbar></Navbar>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/search/:name">
							<SearchProduct />
						</Route>
						<Route exact path="/category/:name">
							<AllProductView />
						</Route>
						<Route exact path="/product">
							<ProductDisplay />
						</Route>
						<PrivateRoute exact path="/Admin">
							<Admin />
						</PrivateRoute>
						<Route exact path="/product/:id">
							<SingleProductView />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>
						<Route exact path="/brand/:name">
							<SingleBrand />
						</Route>
						<Route exact path="/sign_in">
							<SignIn />
						</Route>
						<PrivateRoute exact path="/ProcessPayment">
							<ProcessPayment />
						</PrivateRoute>
					</Switch>
				</div>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
