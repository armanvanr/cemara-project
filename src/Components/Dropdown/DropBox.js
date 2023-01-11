import React, { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../Icons/ArrowDownSolid";
import ArrowUpIcon from "../Icons/ArrowUpSolid";
import './DropBox.css';
import '../Checkbox/Checkbox.css';
import Checkbox from "../Checkbox/Checkbox";

const DropBox = ({ dropdownContent, onChange, buttonStyle, contentStyle, className, component }) => {
    const itemList = {
        data:
            ["Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA", "Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA", "Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA"]
    };
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const { placeholder, data } = dropdownContent;
    const [selected, setIsSelected] = useState((placeholder.val === true) ? (placeholder.text) : (data[0].nama));
    const contentHandler = (e) => {
        const selectedValue = e.target.value;
        setIsSelected(e.target.textContent);
        if(selectedValue===data[0].id){
            setIsActive(!isActive);
            setIsActive2(false);
            onChange(selectedValue);
        } else {
            setIsActive2(!isActive2);
            onChange(selectedValue);
            console.log('cb', isActive2)
        };
    };
    const myRef = useRef();

    const outsideClick = e => {
        if (!myRef.current.contains(e.target)) {
            setIsActive(false);
            console.log('outside')
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
                <Checkbox checkboxContent={itemList} state={isActive2}/>
            </div>
        </div >
    )
};

export default DropBox;