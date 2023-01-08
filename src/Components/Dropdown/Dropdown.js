// import React, { useState } from "react";
// import './Dropdown.css';

// const Dropdown = () => {
//     const [isActive, setIsActive] = useState(false);
//     const [selected, setIsSelected] = useState("Invasi hewan berbahaya");
//     return (
//         <div className="dropdown">
//             <div onClick={(e) => { setIsActive(!isActive); }} className="dropdown-btn">
//                 <span className="selected-item">{selected}</span>
//                 {isActive ? (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow" viewBox="0 0 20 20" fill="currentColor" >
//                         <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
//                     </svg>
//                 ) : (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow" viewBox="0 0 20 20" fill="currentColor" >
//                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                 )}
//             </div>
//             <div className="dropdown-content" style={{ display: isActive ? "block" : "none" }}>
//                 <div onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }} value="" className="item">Invasi hewan berbahaya</div>
//                 <div onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }} value="" className="item">Hewan butuh pertolongan</div>
//             </div>
//         </div >
//     )
// };

// export default Dropdown;