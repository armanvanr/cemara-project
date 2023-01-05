import React, { useState } from "react";
import './style.css';

const SideBarDashboard = () => {
    const [menus, setMenus] = useState([
        {
            menu: "laporan",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>,
            status: true
        },
        {
            menu: "Kampanye",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
            </svg>,
            status: false
        },
        {
            menu: "Adopsi",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>,
            status: false
        },
        {
            menu: "Barang Donasi",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>,
            status: false
        },
        {
            menu: "",
            icon: "",
            status: false
        },
        {
            menu: "Notifikasi",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>,
            status: false
        },
        {
            menu: "Tulis Artikel",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>,
            status: false
        },
    ]
    )

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
                <div className="user-image-profile">
                    <div className="text">JD</div>
                </div>
                <div className="user-details-container">
                    <div className="user-details-name">
                        JhonDoe
                    </div>
                    <div className="user-details-community">
                        Bogor Pet Mania
                    </div>
                </div>
                <div className="user-down-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div className="menu-container">
                <div className="menu-items">
                    {
                        menus.map((menu, index) => {
                            if (index === 4) {
                                return <div className="line"></div>
                            }
                            return (
                                <div key={menu.menu} className={menu.status ? "menu-item active" : "menu-item"} onClick={() => handleClick(menu.menu)}>
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