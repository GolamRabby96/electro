import React from 'react';
import { Link } from 'react-router-dom';
import './LatestPopular.css'

const LatestPopular = () => {
    return (
        <div className="container-fluid letestPopularImg shadow">
            <div className="row">
                <div className="col-md-12">
                    <div className="latestPopularZDiv">
                        <h4>Latest and Popular Brand</h4>
                        <Link to="/product" className="latestPopularBtn">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestPopular;