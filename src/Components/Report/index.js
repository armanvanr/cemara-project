import React from "react";
import './style.css'
import '../../Components/Card.css'
import pic from '../../Assets/Images/pic-dashboard.png';

const Report = () => {
    return (
        <div className="list-container">
            <div className="list-process-container">
               <span className="text-title-list">On Process</span>
                <div className="list-item-container">
                    <div className="card-dashboard">
                        <img src={pic} className="card-dashboard-image" alt="" />
                    </div>
                    <div className="card-dashboard">
                        <img src={pic} className="card-dashboard-image" alt="" />
                    </div>
                </div>
            </div>
            <div className="list-call-container">
                <span className="text-title-list">Call List</span>
                <div className="list-item-container">
                    <div className="card-dashboard">
                        <img src={pic} className="card-dashboard-image" alt="" />
                    </div>
                    <div className="card-dashboard">
                        <img src={pic} className="card-dashboard-image" alt="" />
                    </div>
                    <div className="card-dashboard">
                        <img src={pic} className="card-dashboard-image" alt="" />
                    </div>
                    <div className="card-dashboard">
                        <img src={pic} className="card-dashboard-image" alt="" />
                    </div>
                    <div className="card-dashboard">
                        <img src={pic} className="card-dashboard-image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report