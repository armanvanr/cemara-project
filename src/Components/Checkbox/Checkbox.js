import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arCommunityList } from "../../redux/actions/arReport";
import { daCommunityList } from "../../redux/actions/daReport";
import './Checkbox.css';

const Checkbox = ({ checkboxState, dropdownState }) => {
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
            [e.target.name]: e.target.checked,
        });
    };

    useEffect(() => {
        if (!dropdownState) {
            const items = Object.entries(checkedItems).filter(([key, value]) => value)
            const result = Array.from(items, arr => arr[0])
            if (community === "allComms") {
                dispatch(daCommunityList({}));
                dispatch(arCommunityList({}));
            } else {
                dispatch(daCommunityList(result));
                dispatch(arCommunityList(result));
            };
        }
    }, [dropdownState])

    return (
        <div className="checkbox-content" style={{ display: checkboxState ? "block" : "none" }}>
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