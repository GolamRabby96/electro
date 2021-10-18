import React from 'react';
import { Link } from 'react-router-dom';
import './BuyBestYourChoice.css'


const BuyBestYourChoice = () => {
    return (
        <div className="container-fluid BuyBestYourChoiceImg shadow">
            <div className="row">
                <div className="col-md-12">
                    <div className="BuyBestYour">
                        <h4>Buy Best Your Choice</h4>
                        <Link to="/product" className="BuyBestYourBtn">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyBestYourChoice;