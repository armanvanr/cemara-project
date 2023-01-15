import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ArrowDownIcon from "../Icons/ArrowDownSolid";
import ArrowUpIcon from "../Icons/ArrowUpSolid";
import './Dropdown.css';

const Dropdown = ({ dropdownContent, onChange, buttonStyle, contentStyle, className }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const dispatch = useDispatch();
    const { placeholder, data, actionType } = dropdownContent;
    const [selected, setIsSelected] = useState((placeholder.val === true) ? (placeholder.text) : (dropdownContent.data[0].nama));
    const contentHandler = (e) => {
        const {value, textContent} = e.target;

        setIsSelected(textContent);
        setIsDropdownActive(!isDropdownActive);
        onChange(value);
        console.log(actionType);
        dispatch({
            type: actionType,
            payload: textContent
        });
    };

    const myRef = useRef();

    const outsideClick = e => {
        if (!myRef.current.contains(e.target)) {
            setIsDropdownActive(false);
        };
    };

    useEffect(() => {
        document.addEventListener("mousedown", outsideClick);
        return () => document.removeEventListener("mousedown", outsideClick);
    });

    return (
        <div className="dropdown" ref={myRef}>
            <div onClick={() => { setIsDropdownActive(!isDropdownActive); }} className={className} style={buttonStyle}>
                <span className="selected-item">{selected}</span>
                {isDropdownActive ? (
                    <ArrowUpIcon className="dropdown-arrow" />
                ) : (
                    <ArrowDownIcon className="dropdown-arrow" />
                )}
            </div>
            <div className="dropdown-content" style={{ display: isDropdownActive ? "block" : "none", ...contentStyle }}>
                {data.map((content, index) => {
                    return <option onClick={contentHandler} value={content.id} className="item" key={index}>{content.nama}</option>
                })}
            </div>
        </div >
    )
};

export default Dropdown;