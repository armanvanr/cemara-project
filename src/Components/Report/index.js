import React, { useEffect, useState } from "react";
import './style.css'
import '../../Components/Card.css'
import pic from '../../Assets/Images/pic-dashboard.png';
import dashboardReportAPI from "../../Services/dashboardReport";

const Report = () => {
    const [listReport, setListReport] = useState(
        // [
        //     {
        //         id: 1,
        //         status: "accepted",
        //         reportType: "DA",
        //         animalCategory: "Hewan Berbisa",
        //         address: "Jl. Lato-lato, Surabaya, Jawa Timur",
        //         reporterPhone: "081234567812",
        //         imageUrl: "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-cow-png-art-png-image_5560146.png",
        //         createdAt: "2023-01-03"
        //     },
        //     {
        //         id: 2,
        //         status: "accepted",
        //         reportType: "AR",
        //         animalCategory: "Hewan Liar",
        //         information: "Trenggiling masuk sumur",
        //         address: "Jl. Lato-lato, Surabaya, Jawa Timur",
        //         imageUrl: "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-cow-png-art-png-image_5560146.png",
        //         createdAt: "2023-01-03"
        //     },
        //     {
        //         id: 3,
        //         status: "requested",
        //         reportType: "DA",
        //         animalCategory: "Hewan Berbisa",
        //         address: "Jl. Lato-lato, Surabaya, Jawa Timur",
        //         reporterPhone: "081234567812",
        //         imageUrl: "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-cow-png-art-png-image_5560146.png",
        //         createdAt: "2023-01-03"
        //     },
        //     {
        //         id: 4,
        //         status: "requested",
        //         reportType: "AR",
        //         animalCategory: "Hewan Liar",
        //         information: "Trenggiling masuk sumur",
        //         address: "Jl. Lato-lato, Surabaya, Jawa Timur",
        //         imageUrl: "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-cow-png-art-png-image_5560146.png",
        //         createdAt: "2023-01-03"
        //     },
        //     {
        //         id: 5,
        //         status: "accepted",
        //         reportType: "AR",
        //         animalCategory: "Hewan Liar",
        //         information: "Trenggiling masuk sumur",
        //         address: "Jl. Lato-lato, Surabaya, Jawa Timur",
        //         imageUrl: "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-cow-png-art-png-image_5560146.png",
        //         createdAt: "2023-01-03"
        //     },
        //     {
        //         id: 6,
        //         status: "accepted",
        //         reportType: "AR",
        //         animalCategory: "Hewan Liar",
        //         information: "Trenggiling masuk sumur",
        //         address: "Jl. Lato-lato, Surabaya, Jawa Timur",
        //         imageUrl: "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-cow-png-art-png-image_5560146.png",
        //         createdAt: "2023-01-03"
        //     },
        // ]
    )

    const getReport = async () => {
        const report = await dashboardReportAPI.getReport()
        let data = report.data.data.map((item) => ({ ...item, show: true }))
        setListReport(data)
    }

    useEffect(() => {
        getReport()
    }, [])

    const handleStatus = (status) => {
        alert(status)
    }
    const handleItemClick = (id) => {
        setListReport((prevListReport) => {
            return listReport.map((item) => {
                if (item.id === id) {
                    return { ...item, show: false }
                } else {
                    return { ...item, show: true }
                }
            })
        })

    }

    return (
        <div className="list-container">
            <div className="list-process-container">
                <span className="text-title-list">Diproses</span>
                <div className="list-item-container">
                    {
                        listReport ?
                            (listReport.map((report) => {
                                if (report.status === "accepted") {
                                    return (
                                        <div key={report.id} className="card-dashboard">
                                            <div className="card-dashboard-left">
                                                <img src={report.imageUrl} className="card-dashboard-image" alt="" />
                                                <div className="card-dashboard-detail-container">
                                                    <div className="card-dashboard-detail-header-container">
                                                        <div className="card-dashboard-detail-header-title">
                                                            <div className="card-dashboard-detail-header-title-text">
                                                                {report.reportType === "DA" ? "Invasi Hewan Berbahaya" : "Hewan Butuh Pertolongan"}
                                                            </div>
                                                            <div className={`card-dashboard-detail-header-title-type-container ${report.reportType === "DA" ? "dangerous" : "rescue"}`}>
                                                                <div className="card-dashboard-detail-header-title-type-text">
                                                                    {report.animalCategory}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {
                                                            report.reportType === "DA" ?
                                                                <div className="card-dashboard-detail-location-container">
                                                                    <div className="card-dashboard-detail-location-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="card-dashboard-detail-location-text">
                                                                        {report.address}
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="card-dashboard-detail-location-container">
                                                                    <div className="card-dashboard-detail-information-text">{report.information}</div>
                                                                </div>
                                                        }
                                                    </div>
                                                    {
                                                        report.reportType === "DA" ?
                                                            <div className="card-dashboard-detail-location-phone-container">
                                                                <div className="card-dashboard-detail-location-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="card-dashboard-detail-location-phone-text">{report.reporterPhone}</div>
                                                            </div>
                                                            :
                                                            <div className="card-dashboard-detail-location-container">
                                                                <div className="card-dashboard-detail-location-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                                    </svg>
                                                                </div>
                                                                <div className="card-dashboard-detail-location-text">
                                                                    {report.address}
                                                                </div>
                                                            </div>

                                                    }

                                                </div>
                                            </div>
                                            <div className="card-dashboard-action-container">
                                                <div className="card-dashboard-action-time">
                                                    <div className="card-dashboard-action-time-text"> {report.time}</div>
                                                </div>
                                                <div className="card-dashboard-action-button finish" onClick={() => handleStatus(report.status)}>
                                                    <div className="card-dashboard-action-button-text">
                                                        Selesai
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return null
                                }

                            }
                            )) : null
                    }
                    {/* <div className="card-dashboard">
                        <div className="card-dashboard-left">
                            <img src={pic} className="card-dashboard-image" alt="" />
                            <div className="card-dashboard-detail-container">
                                <div className="card-dashboard-detail-header-container">
                                    <div className="card-dashboard-detail-header-title">
                                        <div className="card-dashboard-detail-header-title-text">
                                            Invasi Hewan Berbahaya
                                        </div>
                                        <div className="card-dashboard-detail-header-title-type-container dangerous">
                                            <div className="card-dashboard-detail-header-title-type-text">
                                                Hewan Berbisa
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-dashboard-detail-location-container">
                                        <div className="card-dashboard-detail-location-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="card-dashboard-detail-location-text">
                                            Jl. Lato-lato, Surabaya, Jawa Timur
                                        </div>
                                    </div>
                                </div>
                                <div className="card-dashboard-detail-location-phone-container">
                                    <div className="card-dashboard-detail-location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div className="card-dashboard-detail-location-phone-text">081234567812</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-dashboard-action-container">
                            <div className="card-dashboard-action-time">
                                <div className="card-dashboard-action-time-text"> 16.45</div>
                            </div>
                            <div className="card-dashboard-action-button finish">
                                <div className="card-dashboard-action-button-text">
                                    Selesai
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-dashboard">
                        <div className="card-dashboard-left">
                            <img src={pic} className="card-dashboard-image" alt="" />
                            <div className="card-dashboard-detail-container">
                                <div className="card-dashboard-detail-header-container">
                                    <div className="card-dashboard-detail-header-title">
                                        <div className="card-dashboard-detail-header-title-text">
                                            Hewan Butuh Pertolongan
                                        </div>
                                        <div className="card-dashboard-detail-header-title-type-container rescue">
                                            <div className="card-dashboard-detail-header-title-type-text">
                                                Hewan Liar
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-dashboard-detail-location-container">
                                        <div className="card-dashboard-detail-information-text">Trenggiling masuk sumur</div>
                                    </div>

                                </div>
                                <div className="card-dashboard-detail-location-container">
                                    <div className="card-dashboard-detail-location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-dashboard-detail-location-text">
                                        Jl. Lato-lato, Surabaya, Jawa Timur
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-dashboard-action-container">
                            <div className="card-dashboard-action-time">
                                <div className="card-dashboard-action-time-text"> 16.45</div>
                            </div>
                            <div className="card-dashboard-action-button finish">
                                <div className="card-dashboard-action-button-text">
                                    Selesai
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="list-call-container">
                <span className="text-title-list">Daftar panggilan</span>
                {
                    listReport ?
                        (listReport.map((report) => {
                            if (report.status === "requested") {
                                return (
                                    <div key={report.id} className="card-dashboard" onClick={() => handleItemClick(report.id)}>
                                        <div className="card-row">
                                            <div className="card-dashboard-left">
                                                <img src={report.imageUrl} className="card-dashboard-image" alt="" />
                                                <div className="card-dashboard-detail-container">
                                                    <div className="card-dashboard-detail-header-container">
                                                        <div className="card-dashboard-detail-header-title">
                                                            <div className="card-dashboard-detail-header-title-text">
                                                                {report.reportType === "DA" ? "Invasi Hewan Berbahaya" : "Hewan Butuh Pertolongan"}
                                                            </div>
                                                            <div className={`card-dashboard-detail-header-title-type-container ${report.reportType === "DA" ? "dangerous" : "rescue"}`}>
                                                                <div className="card-dashboard-detail-header-title-type-text">
                                                                    {report.animalCategory}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {
                                                            report.reportType === "DA" ?
                                                                <div className="card-dashboard-detail-location-container">
                                                                    <div className="card-dashboard-detail-location-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="card-dashboard-detail-location-text">
                                                                        {report.address}
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="card-dashboard-detail-location-container">
                                                                    <div className="card-dashboard-detail-information-text">{report.information}</div>
                                                                </div>
                                                        }
                                                    </div>
                                                    {
                                                        report.reportType === "DA" ?
                                                            <div className="card-dashboard-detail-location-phone-container">
                                                                <div className="card-dashboard-detail-location-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="card-dashboard-detail-location-phone-text">{report.reporterPhone}</div>
                                                            </div>
                                                            :
                                                            <div className="card-dashboard-detail-location-container">
                                                                <div className="card-dashboard-detail-location-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                                    </svg>
                                                                </div>
                                                                <div className="card-dashboard-detail-location-text">
                                                                    {report.address}
                                                                </div>
                                                            </div>

                                                    }

                                                </div>
                                            </div>
                                            <div className="card-dashboard-action-container">
                                                <div className="card-dashboard-action-time">
                                                    <div className="card-dashboard-action-time-text"> {report.time}</div>
                                                </div>
                                                <div className="card-dashboard-action-button accept" onClick={() => handleStatus(report.status)}>
                                                    <div className="card-dashboard-action-button-text">
                                                        Terima
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div hidden={report.show}>
                                            tes
                                        </div>
                                    </div>
                                )
                            } else {
                                return null
                            }

                        }
                        )) : null
                }
                {/* <div className="card-dashboard">
                    <div className="card-dashboard-left">
                        <img src={pic} className="card-dashboard-image" alt="" />
                        <div className="card-dashboard-detail-container">
                            <div className="card-dashboard-detail-header-container">
                                <div className="card-dashboard-detail-header-title">
                                    <div className="card-dashboard-detail-header-title-text">
                                        Invasi Hewan Berbahaya
                                    </div>
                                    <div className="card-dashboard-detail-header-title-type-container dangerous">
                                        <div className="card-dashboard-detail-header-title-type-text">
                                            Hewan Berbisa
                                        </div>
                                    </div>
                                </div>
                                <div className="card-dashboard-detail-location-container">
                                    <div className="card-dashboard-detail-location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-dashboard-detail-location-text">
                                        Jl. Lato-lato, Surabaya, Jawa Timur
                                    </div>
                                </div>
                            </div>
                            <div className="card-dashboard-detail-location-phone-container">
                                <div className="card-dashboard-detail-location-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div className="card-dashboard-detail-location-phone-text">081234567812</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-dashboard-action-container">
                        <div className="card-dashboard-action-time">
                            <div className="card-dashboard-action-time-text"> 16.45</div>
                        </div>
                        <div className="card-dashboard-action-button accept">
                            <div className="card-dashboard-action-button-text">
                                Selesai
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-dashboard">
                    <div className="card-dashboard-left">
                        <img src={pic} className="card-dashboard-image" alt="" />
                        <div className="card-dashboard-detail-container">
                            <div className="card-dashboard-detail-header-container">
                                <div className="card-dashboard-detail-header-title">
                                    <div className="card-dashboard-detail-header-title-text">
                                        Hewan Butuh Pertolongan
                                    </div>
                                    <div className="card-dashboard-detail-header-title-type-container rescue">
                                        <div className="card-dashboard-detail-header-title-type-text">
                                            Hewan Liar
                                        </div>
                                    </div>
                                </div>
                                <div className="card-dashboard-detail-location-container">
                                    <div className="card-dashboard-detail-information-text">Trenggiling masuk sumur</div>
                                </div>

                            </div>
                            <div className="card-dashboard-detail-location-container">
                                <div className="card-dashboard-detail-location-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="card-dashboard-detail-location-text">
                                    Jl. Lato-lato, Surabaya, Jawa Timur
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-dashboard-action-container">
                        <div className="card-dashboard-action-time">
                            <div className="card-dashboard-action-time-text"> 16.45</div>
                        </div>
                        <div className="card-dashboard-action-button accept">
                            <div className="card-dashboard-action-button-text">
                                Selesai
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Report