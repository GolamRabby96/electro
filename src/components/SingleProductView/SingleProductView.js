import React, { useContext, useEffect, useState } from "react";
import "./SingleProductView.css";

import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";


const SingleProductView = () => {
	const {value1, value2} = useContext(UserContext);
	const [cartApp, setCartApp] = value1;


	let { id } = useParams([]);
	// console.log('..............',id);
	const [product, setSingleProduct] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/singleProduct/${id}`)
			.then((res) => res.json())
			.then((data) => setSingleProduct(data[0]));
	},[]);

	let one = `http://localhost:5000/${product.imgOne}`;
	let two = `http://localhost:5000/${product.imgTwo}`;
	let three = `http://localhost:5000/${product.imgThree}`;

	const [selected, setSelected] = useState(one);
	const words = selected.split("/");
	if (words[3] === "undefined") {
		setTimeout(function () {
			setSelected(one);
		},0);
	};



	const [flag, setFlag] = useState(true);
	const handleCart=(key) => {

		const old = JSON.parse(localStorage.getItem('cart') || "[]");
		let i=0;
		for(i; i < cartApp.length; i++) {
            if(old[i].key === key) {
                setFlag(false);
				console.log(flag);
                break;
            }

        }
		if(i === cartApp.length){
			if(flag){
				old.push({img:product.imgOne,name:product.name,key:product.key,price:product.price,quantity:1});
				setCartApp(old)
				localStorage.setItem('cart',JSON.stringify(old));
			}
		}
		if(i !== cartApp.length){
			window.alert("Already add to cart")
		}

		console.log(i,old,flag)

	}

	return (
		<div className="SingleProductView container">
			<div className="row singleProductRow">
				<div className="col-md-4 mb-5">
					<div className="singleProductImg">
						<ReactImageMagnify
							{...{
								smallImage: {
									alt: "Wristwatch by Ted Baker London",
									isFluidWidth: true,
									src: `${selected}`,
								},
								largeImage: {
									src: `${selected}`,
									width: 1200,
									height: 1800,
								},
							}}
						/>

						<div
							onClick={() => setSelected(one)}
							className="sampleOne samplecommon"
						>
							<img src={one} alt="" />
						</div>
						<div
							onClick={() => setSelected(two)}
							className="sampleTwo samplecommon"
						>
							<img src={two} alt="" />
						</div>
						<div
							onClick={() => setSelected(three)}
							className="sampleThree samplecommon"
						>
							<img src={three} alt="" />
						</div>
					</div>
				</div>
				<div className="col-md-8">
					<div className="productPriceSection">
						<h4>Brand : {product.brand}</h4>
						<h4>Name : {product.name}</h4>
						<h4>Price : ${product.price}</h4>
						<hr />
						<h5>{product.criteria1}</h5>
						<hr />
						<p>{product.specification}</p>
						<hr />
						<p className="sellandship">Ships from and sold by Electro.com</p>
						<hr />

						<button onClick={()=>handleCart(product.key)} className="btn btn-primary">Add To Cart</button>
					</div>
					<div className="productDetailsSection mt-5 ms-5">
						<table class="table table-striped">
							<tbody>
								<tr>
									<td>{product.criteria1 && product.criteria1}</td>
								</tr>
								<tr>
									<td>{product.criteria2}</td>
								</tr>
								<tr>
									<td>{product.criteria3}</td>
								</tr>
								<tr>
									<td>{product.criteria4}</td>
								</tr>
								{product.criteria5 !=='undefined' && <tr>
									<td>{ product.criteria5}</td>
								</tr>}
								{product.criteria6 !=='undefined' && <tr>
									<td>{ product.criteria6}</td>
								</tr>}
								{product.criteria7 !=='undefined' && <tr>
									<td>{ product.criteria7}</td>
								</tr>}
								{product.criteria8 !=='undefined' && <tr>
									<td>{ product.criteria8}</td>
								</tr>}
								{product.criteria9 !=='undefined' && <tr>
									<td>{ product.criteria9}</td>
								</tr>}
								{product.criteria10 !=='undefined' && <tr>
									<td>{ product.criteria10}</td>
								</tr>}
								{product.criteria11 !=='undefined' && <tr>
									<td>{ product.criteria11}</td>
								</tr>}
								{product.criteria12 !=='undefined' && <tr>
									<td>{ product.criteria12}</td>
								</tr>}
								{product.criteria13 !=='undefined' && <tr>
									<td>{ product.criteria13}</td>
								</tr>}
								{product.criteria14 !=='undefined' && <tr>
									<td>{ product.criteria14}</td>
								</tr>}
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-md-12 mt-3"></div>
			</div>
		</div>
	);
};

export default SingleProductView;
