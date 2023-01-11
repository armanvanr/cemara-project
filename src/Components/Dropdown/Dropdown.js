import React, { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../Icons/ArrowDownSolid";
import ArrowUpIcon from "../Icons/ArrowUpSolid";
import './Dropdown.css';

const Dropdown = ({ dropdownContent, onChange, buttonStyle, contentStyle, className }) => {
    const [isActive, setIsActive] = useState(false);
    const { placeholder, data } = dropdownContent;
    const [selected, setIsSelected] = useState((placeholder.val === true) ? (placeholder.text) : (dropdownContent.data[0].nama));
    const contentHandler = (e) => {
        setIsSelected(e.target.textContent);
        setIsActive(!isActive);
        const selectedValue = e.target.value;
        onChange(selectedValue);
    };

    const myRef = useRef();

    const outsideClick = e => {
        if (!myRef.current.contains(e.target)) {
            setIsActive(false);
        };
    };

    useEffect(() => {
        document.addEventListener("mousedown", outsideClick);
        return () => document.removeEventListener("mousedown", outsideClick);
    });

    return (
        <div className="dropdown" ref={myRef}>
            <div onClick={() => { setIsActive(!isActive); }} className={className} style={buttonStyle}>
                <span className="selected-item">{selected}</span>
                {isActive ? (
                    <ArrowUpIcon className="dropdown-arrow" />
                ) : (
                    <ArrowDownIcon className="dropdown-arrow" />
                )}
            </div>
            <div className="dropdown-content" style={{ display: isActive ? "block" : "none", ...contentStyle }}>
                {data.map((content, index) => {
                    return <option onClick={contentHandler} value={content.id} className="item" key={index}>{content.nama}</option>
                })}
            </div>
        </div >
    )
};

export default Dropdown;