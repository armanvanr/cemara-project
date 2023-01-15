import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arCommunityList } from "../../redux/actions/arReport";
import { daCommunityList } from "../../redux/actions/daReport";
import './Checkbox.css';

const Checkbox = ({ state }) => {
    const data = [
        "Garda Satwa Indonesia",
        "Pejaten Shelter",
        "ASPERA",
        "Meow Holic Indonesia",
        "KOREJAT",
        "Malang Sahabat Satwa",
        "Palembang Sahabat Satwa",
        "Jakarta Animal Aid Network",
        "Let's Adopt Indonesia",
        "Bogor Lizard Community"
    ];
    const dispatch = useDispatch();
    const { community } = useSelector(state => state.daReport);
    const [checkedItems, setCheckedItems] = useState({});
    const itemHandler = (e) => {
        setCheckedItems({
            ...checkedItems,
            [e.target.name]: e.target.checked
        });
        if (community === "allComms") {
            dispatch(daCommunityList({}));
            dispatch(arCommunityList({}));
        } else {
            dispatch(daCommunityList(checkedItems));
            dispatch(arCommunityList({checkedItems}));
        };
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