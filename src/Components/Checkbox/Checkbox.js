import React, { useState } from "react";
import './Checkbox.css';

const Checkbox = ({ checkboxContent, state }) => {
    const { data } = checkboxContent;
    const [checkedItems, setCheckedItems] = useState({});
    const itemHandler = (e) => {
        setCheckedItems({
            ...checkedItems,
            [e.target.name]: e.target.checked
        });
    };
    return (
        <div className="checkbox-content" style={{ display: state ? "block" : "none" }}>
            <div className="checkbox-container">
                {data.map((item, index) => (
                    <label className="checkbox-item" key={index}>
                        <input type="checkbox" name={item} checked={checkedItems[index]} onChange={itemHandler} />
                        <span className="checkbox-text">{item}</span>
                    </label>
                ))}
            </div>
        </div>
    )
};

export default Checkbox;