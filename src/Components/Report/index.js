import React, { useEffect, useState } from "react";
import './style.css'
import '../../Components/Card.css'
import pic from '../../Assets/Images/pic-dashboard.png';
import dashboardReportAPI from "../../Service/dashboardReport";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

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

    const updateStatusReport = async (id, type) => {
        try {
            await dashboardReportAPI.updateStatusReport(id, type)
            getReport()
        } catch (error) {
            alert("Update Fail")
        }

    }

    useEffect(() => {
        getReport()
    }, [])

    const handleStatus = (id, type) => {
        console.log(id)
        updateStatusReport(id, type)
        // alert(status)
    }
    const handleItemClick = (id, type, status) => {
        // console.log(type);
        if (type === "AR") {
            // setListReport((prevListReport) => {
            //     return listReport.map((item) => {
            //         if (item.id === id) {
            //             if (item.show === false) {
            //                 return { ...item, show: true }
            //             } else {
            //                 return { ...item, show: false }
            //             }
            //         } else {
            //             return { ...item, show: true }
            //         }
            //     })
            // })
            if (status === "accepted") {
                setInfiniteDataAccepted((prevListReport) => {
                    return infiniteDataAccepted.map((item) => {
                        if (item.id === id) {
                            if (item.show === false) {
                                return { ...item, show: true }
                            } else {
                                return { ...item, show: false }
                            }
                        } else {
                            return { ...item, show: true }
                        }
                    })
                })
            } else if (status === "requested") {
                setInfiniteDataRequested((prevListReport) => {
                    return infiniteDataRequested.map((item) => {
                        if (item.id === id) {
                            if (item.show === false) {
                                return { ...item, show: true }
                            } else {
                                return { ...item, show: false }
                            }
                        } else {
                            return { ...item, show: true }
                        }
                    })
                })
            }
        }
        // fetchMoreData()
    }
    // console.log(listReport);

    const filter = () => {
        setListReportAccepted((prev) => {
            return listReport.filter((item) => {
                if (item.status === "accepted") {
                    return item
                }
            })
        })
        setListReportRequested((prev) => {
            return listReport.filter((item) => {
                if (item.status === "requested") {
                    return item
                }
            })
        })
    }
    
    
    const [infiniteData, setInfiniteData] = useState()
    const [infiniteDataAccepted, setInfiniteDataAccepted] = useState()
    const [infiniteDataRequested, setInfiniteDataRequested] = useState()
    const [currentIndex, setCurrentIndex] = useState(4)
    const [currentIndexAccepted, setCurrentIndexAccepted] = useState(4)
    const [currentIndexRequested, setCurrentIndexRequested] = useState(4)
    const [listReportAccepted, setListReportAccepted] = useState()
    const [listReportRequested, setListReportRequested] = useState()
    const [infiniteStatus, setInfiniteStatus] = useState(false)
    const [hasMoreAccepted, setHasMoreAccepted] = useState(true)
    const [hasMoreRequested, setHasMoreRequested] = useState(true)
    
    console.log('list report',listReport)
    console.log(currentIndex, listReportAccepted, listReportRequested, infiniteStatus)
    useEffect(() => {
        if (listReport && currentIndex === 4 && listReportAccepted && listReportRequested && !infiniteStatus) {
            console.log('first')
            fetchMoreData("first")
        }
        if (listReport && !listReportAccepted && !listReportRequested) {
            console.log('update')
            filter()
        }
    }, [listReport, listReportAccepted, listReportRequested])

    const fetchMoreData = (type) => {
        setTimeout(() => {
            // let totalData = listReport.length
            console.log(type, currentIndexAccepted, listReportAccepted.length);
            // if (currentIndex < listReportAccepted.length) {
            if (type === "accepted" && currentIndexAccepted <= listReportAccepted.length) {
                // console.log(type);
                setInfiniteDataAccepted((prevListReport) => {
                    return listReportAccepted.filter((item, index) => {
                        if (index <= currentIndexAccepted) {
                            // console.log(index, currentIndex);
                            return item
                        }
                    })
                })
                let index = currentIndexAccepted >= 4 ? currentIndexAccepted + 5 : currentIndexAccepted
                setCurrentIndexAccepted(index)
            }
            else if (type === "requested" && currentIndexRequested <= listReportRequested.length) {
                setInfiniteDataRequested((prevListReport) => {
                    return listReportRequested.filter((item, index) => {
                        if (index <= currentIndexRequested) {
                            // console.log(index, currentIndex);
                            return item
                        }
                    })
                })
                let index = currentIndexRequested >= 4 ? currentIndexRequested + 5 : currentIndexRequested
                setCurrentIndexRequested(index)
            }
            else if (type === "first") {
                setInfiniteDataRequested((prevListReport) => {
                    return listReportRequested.filter((item, index) => {
                        if (index <= currentIndexRequested) {
                            // console.log(index, currentIndex);
                            return item
                        }
                    })
                })
                setInfiniteDataAccepted((prevListReport) => {
                    return listReportAccepted.filter((item, index) => {
                        if (index <= currentIndexAccepted) {
                            // console.log(index, currentIndex);
                            return item
                        }
                    })
                })
                let index = currentIndex >= 4 ? currentIndex + 5 : currentIndex
                setCurrentIndexAccepted(index)
                setCurrentIndexRequested(index)
                setInfiniteStatus(true)
            }
            else if (currentIndexAccepted > listReportAccepted.length) {
                setHasMoreAccepted(false)
            }
            else if (currentIndexRequested > listReportRequested.length) {
                setHasMoreRequested(false)
            }
            // }

            // let index = currentIndex >= 4 ? currentIndex + 5 : currentIndex
            // setCurrentIndex(index)
            // console.log("called");
        }, 1000);
    }

    // console.log(infiniteData, currentIndex);
    // console.log(listReportRequested);
    // console.log(listReportAccepted);
    // console.log(infiniteDataAccepted);



    return (
        <div className="list-container">
            <div className="list-process-container">
                <span className="text-title-list">Diproses</span>
                <div className="list-item-container">
                    {
                        infiniteDataAccepted ?
                            // <div
                            //     id="scrollableDiv"
                            //     style={{
                            //         height: 300,
                            //         overflow: 'auto',
                            //         display: 'flex',
                            //         flexDirection: 'column-reverse',
                            //     }}
                            // >
                            <InfiniteScroll
                                dataLength={infiniteDataAccepted.length}
                                next={() => fetchMoreData("accepted")}
                                hasMore={hasMoreAccepted}
                                loader={<h4>Loading...</h4>}
                                // scrollableTarget="scrollableDiv"
                                height={400}
                                endMessage={
                                    <h4>Tidak ada data lagi</h4>
                                }

                            >
                                <div className="list-item-container">
                                    {
                                        infiniteDataAccepted.map((report) => {
                                            // { console.log(report); }
                                            if (report.status) {
                                                return (
                                                    <div key={report.id} className="card-dashboard" >
                                                        <div className="card-row">
                                                            <div className="card-dashboard-left">
                                                                <img src={report.imageUrl} className="card-dashboard-image" alt="" />
                                                                <div className="card-dashboard-detail-container">
                                                                    <div className="card-dashboard-detail-header-container">
                                                                        <div className="card-dashboard-detail-header-title">
                                                                            <div className="card-dashboard-detail-header-title-text" onClick={() => handleItemClick(report.id, report.reportType, "accepted")}>
                                                                                {report.reportType === "DA" ? "Invasi Hewan Berbahaya" : "Hewan Butuh Pertolongan"}
                                                                            </div>
                                                                            <div className={`card-dashboard-detail-header-title-type-container ${report.reportType === "DA" ? "dangerous" : "rescue"}`}>
                                                                                <div className="card-dashboard-detail-header-title-type-text">
                                                                                    {report.reportType === "DA" ? report.animalCategory : report.animalType}
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
                                                                                    <div className={`card-dashboard-detail-information-text ${report.show ? "text-overflow" : null}`}>{report.information}</div>
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
                                                                                <div className="card-dashboard-detail-location-phone-text">{report.phoneNumber}</div>
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
                                                                <div className="card-dashboard-action-button finish" onClick={() => handleStatus(report.id, report.reportType)}>
                                                                    <div className="card-dashboard-action-button-text">
                                                                        Selesai
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div hidden={report.show}>
                                                            {/* <div className={report.show ? "m-fadeIn": "m-fadeOut"}> */}
                                                            <div className="card-dashboard-detail-extra-container">
                                                                <div className="card-dashboard-detail-header-title-text">
                                                                    Detail Pelapor
                                                                </div>
                                                                <div className="card-dashboard-detail-information-text">Nama : {report.name}</div>
                                                                <div className="card-dashboard-detail-information-text">Email : {report.email}</div>
                                                                <a href={`https://wa.me/62${report.phoneNumber.slice(1)}`} className="card-dashboard-detail-information-text">Nomor Telepon : {report.phoneNumber}</a>
                                                            </div>
                                                        </div>
                                                    </div>


                                                )
                                            } else {
                                                return null
                                            }

                                        }
                                        )
                                    }
                                </div>
                            </InfiniteScroll>
                            // </div>
                            :
                            <Loading />
                    }


                </div>
                {/* <div className="card-dashboard-action-button-text" onClick={fetchMoreData}>
                    Data selanjutnya
                </div> */}
            </div>
            <div className="list-call-container">
                <span className="text-title-list">Daftar panggilan</span>
                <div className="list-item-container">
                    {
                        infiniteDataRequested ?
                            // <div
                            //     id="scrollableDiv"
                            //     style={{
                            //         height: 300,
                            //         overflow: 'auto',
                            //         display: 'flex',
                            //         flexDirection: 'column-reverse',
                            //     }}
                            // >
                            <InfiniteScroll
                                dataLength={infiniteDataRequested.length}
                                next={() => fetchMoreData("requested")}
                                hasMore={hasMoreRequested}
                                loader={<h4>Loading...</h4>}
                                // scrollableTarget="scrollableDiv"
                                height={400}
                                endMessage={
                                    <h4>Tidak ada data lagi</h4>
                                }

                            >
                                <div className="list-item-container">
                                    {
                                        infiniteDataRequested.map((report) => {
                                            // { console.log(report); }
                                            if (report.status) {
                                                return (
                                                    <div key={report.id} className="card-dashboard" >
                                                        <div className="card-row">
                                                            <div className="card-dashboard-left">
                                                                <img src={report.imageUrl} className="card-dashboard-image" alt="" />
                                                                <div className="card-dashboard-detail-container">
                                                                    <div className="card-dashboard-detail-header-container">
                                                                        <div className="card-dashboard-detail-header-title">
                                                                            <div className="card-dashboard-detail-header-title-text" onClick={() => handleItemClick(report.id, report.reportType, "requested")}>
                                                                                {report.reportType === "DA" ? "Invasi Hewan Berbahaya" : "Hewan Butuh Pertolongan"}
                                                                            </div>
                                                                            <div className={`card-dashboard-detail-header-title-type-container ${report.reportType === "DA" ? "dangerous" : "rescue"}`}>
                                                                                <div className="card-dashboard-detail-header-title-type-text">
                                                                                    {report.reportType === "DA" ? report.animalCategory : report.animalType}
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
                                                                                    <div className={`card-dashboard-detail-information-text ${report.show ? "text-overflow" : null}`}>{report.information}</div>
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
                                                                                <div className="card-dashboard-detail-location-phone-text">{report.phoneNumber}</div>
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
                                                                <div className="card-dashboard-action-button accept" onClick={() => handleStatus(report.id, report.reportType)}>
                                                                    <div className="card-dashboard-action-button-text">
                                                                        Terima
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div hidden={report.show}>
                                                            {/* <div className={report.show ? "m-fadeIn": "m-fadeOut"}> */}
                                                            <div className="card-dashboard-detail-extra-container">
                                                                <div className="card-dashboard-detail-header-title-text">
                                                                    Detail Pelapor
                                                                </div>
                                                                <div className="card-dashboard-detail-information-text">Nama : {report.name}</div>
                                                                <div className="card-dashboard-detail-information-text">Email : {report.email}</div>
                                                                <a href={`https://wa.me/62${report.phoneNumber.slice(1)}`} className="card-dashboard-detail-information-text">Nomor Telepon : {report.phoneNumber}</a>
                                                            </div>
                                                        </div>
                                                    </div>


                                                )
                                            } else {
                                                return null
                                            }

                                        }
                                        )
                                    }
                                </div>
                            </InfiniteScroll>
                            // </div>
                            :
                            <Loading />
                    }
                </div>
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
            </div >
        </div >
    )
}

export default Report