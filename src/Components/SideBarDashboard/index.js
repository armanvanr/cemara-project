import React, { useState } from "react";
import { useSelector } from "react-redux";
import ExclamationIcon from "../Icons/ExclamationSolid";
import HeartIcon from "../Icons/HeartSolid";
import FlagIcon from "../Icons/FlagSolid";
import './style.css';
import CashIcon from "../Icons/CashSolid";
import PencilIcon from "../Icons/PencilAltSolid";
import BellIcon from "../Icons/BellSolid";
import ArrowDownIcon from "../Icons/ArrowDownSolid";

const SideBarDashboard = () => {
    const [menus, setMenus] = useState([
        {
            menu: "Laporan",
            icon: <ExclamationIcon />,
            status: true
        },
        {
            menu: "Kampanye",
            icon: <FlagIcon />,
            status: false
        },
        {
            menu: "Adopsi",
            icon: <HeartIcon />,
            status: false
        },
        {
            menu: "Barang Donasi",
            icon: <CashIcon />,
            status: false
        },
        {
            menu: "",
            icon: "",
            status: false
        },
        {
            menu: "Notifikasi",
            icon: <BellIcon />,
            status: false
        },
        {
            menu: "Tulis Artikel",
            icon: <PencilIcon />,
            status: false
        },
    ]
    )

    const { user: currentUser } = useSelector(state => state.auth);

    const handleClick = (nama) => {
        const newMenu = menus.map((menu) => {
            if (menu.menu === nama) {
                return { ...menu, status: true }
            }
            else {
                return { ...menu, status: false }
            }
        })

        setMenus(newMenu)
    }

    return (
        <div className="sidebar-container">
            <div className="user-container">
                {/* avatar */}
                <div className="user-image-profile">
                    <div className="text">JD</div>
                </div>
                <div className="user-details-container">
                    <div className="user-details-name">
                        {currentUser.email}
                    </div>
                    <div className="user-details-community">
                        {currentUser.namaLembaga}
                    </div>
                </div>
                <div className="user-down-icon">
                    <ArrowDownIcon />
                </div>
            </div>
            <div className="menu-container">
                <div className="menu-items">
                    {
                        menus.map((menu, index) => {
                            if (index === 4) {
                                return <div key={index} className="line"></div>
                            }
                            return (
                                <div key={menu.menu} className={menu.status ? "menu-item target" : "menu-item"} onClick={() => handleClick(menu.menu)}>
                                    <div className="menu-icon">
                                        {menu.icon}
                                    </div>
                                    <div className="menu-text">
                                        {menu.menu}
                                    </div>
                                </div>

                            )
                        })
                    }
                    {/* <div className="line"></div> */}
                </div>
            </div>
        </div>
    )
}

export default SideBarDashboard;