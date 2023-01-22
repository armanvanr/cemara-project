import React from "react";
import './ProgressBar.css';

const ProgressBar = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div className="progress-container">
            <div className="progress">
                <div className="progress-done" style={style} />
            </div>
            <span>{done}%</span>
        </div>
    )
};

export default ProgressBar;