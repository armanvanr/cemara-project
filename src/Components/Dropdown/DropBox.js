import React, { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../Icons/ArrowDownSolid";
import ArrowUpIcon from "../Icons/ArrowUpSolid";
import './DropBox.css';
import '../Checkbox/Checkbox.css';
import Checkbox from "../Checkbox/Checkbox";
import { useDispatch } from "react-redux";
import { daCommunitySelect } from "../../redux/actions/daReport";
import { arCommunity } from "../../redux/actions/arReport";

const DropBox = ({ dropdownContent, contentStyle, className, buttonStyle }) => {
    const dispatch = useDispatch();
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [isCheckboxActive, setIsCheckboxActive] = useState(false);
    const { placeholder, data } = dropdownContent;
    const [selected, setIsSelected] = useState((placeholder.val === true) ? (placeholder.text) : (data[0].nama));
    const contentHandler = (e) => {
        const {value, textContent} = e.target;
        setIsSelected(textContent);

        dispatch(daCommunitySelect(value));
        dispatch(arCommunity(value));
        
        if (value === data[0].id) {
            setIsDropdownActive(!isDropdownActive);
            setIsCheckboxActive(false);
        } else {
            setIsCheckboxActive(!isCheckboxActive);
        };
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
                <Checkbox state={isCheckboxActive} />
            </div>
        </div >
    )
};

export default DropBox;