import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import "./Payment.css";

const stripePromise = loadStripe(
	"pk_test_51IfQ4YCOfXyDJ9LkpsIHNmWNaHF0ss5pvaJHFx56roM9Bso1ZTH2mrSgn7q2JO1YAaIGkD2BLmjYBZfQ0UaSo17H00qju1E693"
);

const ProcessPayment = () => {
	const [cartItem, setCartItem] = useState([]);
	useEffect(() => {
		setCartItem(JSON.parse(localStorage.getItem("cart") || ""));
	}, []);

	const [totalAmount, setTotalAmount] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);

	let total = 0;
	let quantityCount = 0;
	useEffect(() => {
		cartItem.forEach((ct) => {
			let amountCurrent = parseInt(ct.price);
			let quantity = parseInt(ct.quantity);

			total += amountCurrent;
			quantityCount += quantity;
			setTotalAmount(total);
			setTotalQuantity(quantityCount);
		});
		if (cartItem.length === 0) {
			setTotalAmount(0);
			setTotalQuantity(0);
		}
	}, [cartItem]);
	return (
		<div className="containerPaymentTop">
			<div className="container ">
				<div className="row">
					<div className="col-md-6 offset-md-3">
							<div className="paymentContainer">
						<div className="shadow p-5">
								<div className="productCountPayment">
									<h5>Total Price : {totalAmount}</h5>
									<p>Number of product : {totalQuantity}</p>
								</div>
								<div className="mainPay">
									<Elements stripe={stripePromise}>
										<PaymentForm />
									</Elements>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProcessPayment;
