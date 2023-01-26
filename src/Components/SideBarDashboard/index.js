import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExclamationIcon from "../Icons/ExclamationSolid";
import HeartIcon from "../Icons/HeartSolid";
import FlagIcon from "../Icons/FlagSolid";
import './style.css';
import CashIcon from "../Icons/CashSolid";
import PencilIcon from "../Icons/PencilAltSolid";
import BellIcon from "../Icons/BellSolid";
import ArrowDownIcon from "../Icons/ArrowDownSolid";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutSolid from "../Icons/LogoutSolid";
import authService from "../../Service/auth";

const SideBarDashboard = () => {
    const [menus, setMenus] = useState([
        {
            menu: "Laporan",
            icon: <ExclamationIcon />,
            status: true,
            url: "/dashboard/report"
        },
        {
            menu: "Kampanye",
            icon: <FlagIcon />,
            status: false,
            url: "/dashboard/campaign"
        },
        {
            menu: "Adopsi",
            icon: <HeartIcon />,
            status: false,
            url: "/dashboard/adopt"
        },
        {
            menu: "Barang Donasi",
            icon: <CashIcon />,
            status: false,
            url: "/dashboard/donate"
        },
        {
            menu: "Logout",
            icon: <LogoutSolid />,
            status: false,
            url: "/dashboard/logout"
        },
        {
            menu: "Notifikasi",
            icon: <BellIcon />,
            status: false,
            url: "/dashboard/notification"
        },
        {
            menu: "Tulis Artikel",
            icon: <PencilIcon />,
            status: false,
            url: "/dashboard/artikel"
        },
    ]
    )

    const navigate = useNavigate()
    const location = useLocation()

    const currentPage = () => {
        const newMenu = menus.map((menu) => {
            if (menu.url === location.pathname) {
                return { ...menu, status: true }
            }
            else {
                return { ...menu, status: false }
            }
        })

        setMenus(newMenu)
    }

    useEffect(() => {
        currentPage()
    }, [])

    const { user: currentUser } = useSelector(state => state.auth);

    const handleClick = (url) => {
        if (url === '/dashboard/logout') {
            authService.logout()
            navigate(0)
        } else {
            navigate(url)
        }
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
                            return (
                                <>
                                    {index === 5 ? <div key={index} className="line"></div> : null}
                                    <div key={menu.menu} className={menu.status ? "menu-item target" : "menu-item"} onClick={() => handleClick(menu.url)}>
                                        <div className="menu-icon">
                                            {menu.icon}
                                        </div>
                                        <div className="menu-text">
                                            {menu.menu}
                                        </div>
                                    </div>

                                </>

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