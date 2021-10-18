import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "./../../App";
import jwt from "jwt-decode";
import "./SignIn.css";

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
 }

const SignIn = () => {
	const [infoMessege, setInfoMessage] = useState('')
	const { value1, value2 } = useContext(UserContext);
	const [newUser, setNewUser] = useState(false);
	const [user, setUser] = useState({
		ifUser:true,
		email:'',
		password:''
	});

	const [cartApp, setCartApp] = value1;
	const [loggedInUser, setLoggedInUser] = value2;
	const provider = new GoogleAuthProvider();

	const history = useHistory();
	const location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

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
	}, [loggedInUser.length]);

	const handleSignIN = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((res) => {
				const { displayName, email } = res.user._delegate;
				const getUserInfo = {
					isLoggedIn: true,
					displayName: displayName,
					email: email,
				};
				setLoggedInUser(getUserInfo);
				storeAuthToken();
				history.replace(from);
			});
	};

	const storeAuthToken = () => {
		firebase
			.auth()
			.currentUser.getIdToken(/* forceRefresh */ true)
			.then(function (idToken) {
				sessionStorage.setItem("userToken", idToken);
			})
			.catch(function (error) {
				// Handle error
			});
	};

	const handleBlur=(e)=>{
		let isFieldValid = true;
		if(e.target.name === "email"){
			isFieldValid = /\S+@\S+\.\S/.test(e.target.value);
		}
		if(e.target.name === "password"){
			const isPasswordValid = e.target.value > 6;
			const passHaseNumber = /\d{1}/.test(e.target.value);
			isFieldValid =  isPasswordValid && passHaseNumber;
		}
		if(isFieldValid){
			const newUserInfo = {...user};
			newUserInfo[e.target.name] = e.target.value;
			setUser(newUserInfo);

		}
	}
	const handleSubmit=(e)=>{
		e.preventDefault();
		if(newUser && user.email && user.password){
			firebase
			.auth().createUserWithEmailAndPassword(user.email, user.password)
			.then( res => {
				setNewUser(false);
				setInfoMessage('Registration successful ');
			})
		}
		if(!newUser && user.email, user.password){
			firebase.auth().signInWithEmailAndPassword(user.email, user.password)
			.then(res => {
				console.log(res);
				history.replace(from);
				storeAuthToken();
			})
			.catch( err =>{
				setInfoMessage('Email or Password not math _ or this used not registerd');
			})
		}

	}

	return (
		<div className="loginMain">
			<div className="container">
				<div className="row">
					<div className="col-md-">
						<p className="text-center bg-info">{infoMessege}</p>
					</div>
					<div className="col-md-4 offset-md-4 pt-5">
						<div className="formSection mt-5 ">
							<form onSubmit={handleSubmit}>
								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label">
										Email address
									</label>
									<input
										type="email"
										name="email"
										onBlur={handleBlur}
										class="form-controlEdit"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>
								<div class="mb-3">
									<label for="exampleInputPassword1" class="form-label">
										Password
									</label>
									<input
										type="password"
										name="password"
										onBlur={handleBlur}
										class="form-controlEdit"
										id="exampleInputPassword1"
									/>
								</div>
                                {newUser &&<div class="mb-3">
									<label for="exampleInputPassword1" class="form-label">
										Confirm Password
									</label>
									<input
										type="password"
										name="password"
										onBlur={handleBlur}
										class="form-controlEdit"
										id="exampleInputPassword1"
									/>
								</div>}
                                {!newUser&&<p>Register?<span onClick={()=>setNewUser(!newUser)}>Click Here</span></p>}
                                {newUser&&<p>Already User?<span onClick={()=>setNewUser(!newUser)}>Click Here</span></p>}

								<button type="submit" class="btn btn-edit container">
									{newUser? "Sign up":"Sign In"}
								</button>
							</form>
                            <p className="OR">OR</p>
							<button onClick={handleSignIN} class="btn btn-edit container">
								Google SignIn
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
