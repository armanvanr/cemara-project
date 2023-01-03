import React from "react";
import './style.css';
import DashboardCampaign from "../Campaign";

const ContentDashboard = () => {
    return (
        <div className="content-container">
            <div className="notif-icon-container">
                <div className="notif-icon-border">
                    <div className="notif-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="text-title">
                Campaign
            </div>
            <DashboardCampaign />
        </div>
    )
}

export default ContentDashboard