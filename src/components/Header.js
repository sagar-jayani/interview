import React from "react";
import { Link } from "react-router-dom";
import cm_camara_ic from '../assets/img/cm_camara_ic.png'
import cm_notification_ic from '../assets/img/cm_notification_ic.png'
import cm_profile_ic from '../assets/img/cm_profile_ic.png'
import location from '../assets/img/location.png'

export default function Header() {
    const sidebar = (classs) => {
        if (document.body.getAttribute("side-menu") === classs) {
            document.body.removeAttribute("side-menu", classs)
        }
        else {
            document.body.setAttribute("side-menu", classs)
        }
    }

    return (
        <>
            <div className="cm_header_wrapper">
                <header>
                    <div className="cm_header_inner_wrap">
                        <div className="cm_header_left_block">
                            <div className="cm_header_l_inner">
                                <div id="toggle_bar" className="toggle_bar" onClick={() => { sidebar("side_bar_menu") }}>
                                    <div className="one"></div>
                                    <div className="two"></div>
                                    <div className="three"></div>
                                </div>
                                
                                <Link to={"/"} title="logo" className="cm_logon_link">
                                    LOGO
                                </Link>
                            </div>
                            <ul>
                                <li className="menu_profile_block">
                                    <div className='cm_profile_col'>
                                        <div className='position-relative'>
                                            <div className='cm_profile_img'>
                                                <img src={cm_profile_ic} alt="profile" />
                                            </div>
                                            <div className='cm_camara_ic'>
                                                <img src={cm_camara_ic} alt="camara" />
                                            </div>
                                        </div>
                                        <div className='cm_profile_name'>
                                            <h2>John Smith</h2>
                                            <p>
                                                <img src={location} alt="location" />
                                                <span>Main St. Farmington, CA 123</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#0">Menu 1</Link>
                                    <div className="inner_menu_block">
                                        <ul className="">
                                            <li>
                                                <Link to="">My Programs</Link>
                                            </li>
                                            <li>
                                                <Link to="">New Programs</Link>
                                            </li>
                                            <li>
                                                <Link to="">Programs invites</Link>
                                            </li>
                                            <li>
                                                <Link to="">Programs Request</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#0">Menu 2</Link>
                                </li>
                                <li>
                                    <Link to="#0">Menu 3</Link>
                                </li>
                                <li className="moblie_logout">
                                    <Link to="#0">Logout</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="cm_my_profile d-flex align-items-center">
                            <div className="cm_notification_ic">
                                <img src={cm_notification_ic} alt="notification" />
                            </div>
                            <div className="cm_profile_ic">
                                <img src={cm_profile_ic} alt="profile" />
                            </div>
                        </div>
                        <div id="toggle_bar" className="toggle_bar mobile_toggle" onClick={() => { sidebar("side_bar_menu") }}>
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
    // }
}
