import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import "./Cart.css";

const Cart = () => {
    const {value1, value2} = useContext(UserContext);
	const [cartApp, setCartApp] = value1;

	const [cartItem, setCartItem] = useState([]);
    // console.log(cartItem)
	useEffect(() => {
		setCartItem(JSON.parse(localStorage.getItem("cart") || ""));
	}, [cartApp]);


    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    let total=0;
    let quantityCount=0;
    useEffect(() => {
		cartItem.forEach(ct =>{
            let amountCurrent = parseInt(ct.price);
            let quantity = parseInt(ct.quantity);

            total += amountCurrent;
            quantityCount += quantity;
            setTotalAmount(total);
            setTotalQuantity(quantityCount);
        })
        if(cartItem.length === 0){
            setTotalAmount(0);
            setTotalQuantity(0);
        }
        
	}, [cartItem]);

    
    const handleAdd=(key) => {
        for (var i = 0; i < cartItem.length; i++) {
            if(cartItem[i].key === key){
                let getQuantity = parseInt(cartItem[i].quantity);
                cartItem[i].quantity = getQuantity+1;

                let getAmount = parseInt(cartItem[i].price);
                let final = getAmount / getQuantity;
                cartItem[i].price = getAmount+final;
                localStorage.setItem('cart',JSON.stringify(cartItem));
                setCartItem(cartItem);
                setCartApp(cartItem);
                break;
            }
        }

    }
    const handleRemove=(key) => {
        for (var i = 0; i < cartItem.length; i++) {
            if(cartItem[i].key === key){
                let getQuantity = parseInt(cartItem[i].quantity);
                if(getQuantity>1){
                    cartItem[i].quantity = getQuantity-1;
                    let getAmount = parseInt(cartItem[i].price);
                    let final = getAmount / getQuantity;
                    cartItem[i].price = getAmount-final;
                    localStorage.setItem('cart',JSON.stringify(cartItem));
                    setCartItem(cartItem);
                    setCartApp(cartItem);
                }
                break;
            }
        }

    }

    const handleDelete=(key)=>{
        for(var i = 0; i < cartItem.length; i++) {
            if(cartItem[i].key === key) {
                console.log(cartItem);
                cartItem.splice(i, 1);
                localStorage.setItem('cart',JSON.stringify(cartItem));
                setCartApp(cartItem);
                break;
            }
        }
    }

    const history = useHistory();
    const handleProcessPayment = ()=>{
        history.push('/ProcessPayment')
    }

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-12">
					{cartItem.length>-1 &&<table class="table table-striped">
						<thead>
							<tr>
								<th scope="col">Product Image</th>
								<th scope="col">Product Name</th>
								<th scope="col">Product Price</th>
								<th scope="col">Quentity</th>
								<th scope="col">Add/minus</th>
								<th scope="col">Delete</th>
							</tr>
						</thead>
						<tbody>
							{cartItem && cartItem.map(cart =>
                                <tr className="cartTable">
                                    <th scope="row"><img src={`http://localhost:5000/${cart.img}`} alt="" /></th>
                                    <td>{cart.name}</td>
                                    <td>${cart.price}</td>
                                    <td>{cart.quantity}</td>
                                    <td>
                                        <button onClick={()=> handleAdd(cart.key)} className="btn btn-success">Add</button> &nbsp;
                                        <button onClick={()=> handleRemove(cart.key)} className="btn btn-success">Remove</button>
                                    </td>
                                    <td><button onClick={()=> handleDelete(cart.key)} className="btn btn-danger">X</button></td>
							    </tr>
                            )}
						</tbody>
                        <tbody className="">
                                <tr className="cartTable">
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
							    </tr>
						</tbody>
                        <tbody className="">
                                <tr className="cartTable">
                                    <th></th>
                                    <th>Total Amount </th>
                                    <th>${totalAmount}</th>
                                    <th>{totalQuantity}</th>
                                    <th><button onClick={handleProcessPayment} className="btn btn-info">Process Order</button></th>
                                    <th></th>
							    </tr>
						</tbody>
					</table>}
                    {cartItem.length<0 && 
                        <h1>Cart is empty</h1>
                    }
				</div>
			</div>
		</div>
	);
};

export default Cart;
