import React, { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from './../../App';
import {Route, Redirect} from 'react-router-dom';
import jwt from "jwt-decode";

const PrivateRoute = ({children, ...rest}) => {
    const {value1, value2} = useContext(UserContext);
	const [cartApp, setCartApp] = value1;
	const [loggedInUser, setLoggedInUser] = value2;
    
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

    console.log('........11',loggedInUser);
    return (
        <Route 
            {...rest}
            render = {({location})=> loggedInUser.email || sessionStorage.getItem('token')? children:(
                <Redirect to={{
                    pathname:'/sign_in',
                    state:{from:location}
                }}/>
            )}
            
        />
    );
};

export default PrivateRoute;