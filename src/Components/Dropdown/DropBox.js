import React, { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../Icons/ArrowDownSolid";
import ArrowUpIcon from "../Icons/ArrowUpSolid";
import './DropBox.css';
import '../Checkbox/Checkbox.css';
import Checkbox from "../Checkbox/Checkbox";
import { useDispatch } from "react-redux";
import { daCommunitySelect } from "../../redux/actions/daReport";

const DropBox = ({ dropdownContent, contentStyle, className, buttonStyle }) => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const { placeholder, data } = dropdownContent;
    const [selected, setIsSelected] = useState((placeholder.val === true) ? (placeholder.text) : (data[0].nama));
    
    const contentHandler = (e) => {
        const selectedValue = e.target.value;
        setIsSelected(e.target.textContent);
        dispatch(daCommunitySelect(selectedValue));

        if (selectedValue === data[0].id) {
            setIsActive(!isActive);
            setIsActive2(false);
        } else {
            setIsActive2(!isActive2);
        };
    };

    // console.log('dropbox :', commData)
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
                <Checkbox state={isActive2} />
            </div>
        </div >
    )
};

export default DropBox;