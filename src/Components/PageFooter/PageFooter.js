import React from "react";
import HelpIcon from "../Icons/HelpSolid";
import './PageFooter.css';

const PageFooter = () => {
    return (
        <div className="PageFooter">
            <button className="TermsConditions">
                Kebijakan & Privasi
            </button>
            <button className="HelpButton">
                <HelpIcon />
                Bantuan
            </button>
        </div>
    )
};

export default PageFooter;