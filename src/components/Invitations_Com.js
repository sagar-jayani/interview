import React from 'react'
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import person_1 from '../assets/img/person_1.png'
import person_2 from '../assets/img/person_2.png'
import person_3 from '../assets/img/person_3.png'
import person_4 from '../assets/img/person_4.png'
import person_5 from '../assets/img/person_5.png'
import check_ic from '../assets/img/check_ic.png'

const Invitations = () => {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className=""
        >
            <Tab eventKey="home" title="Sent (15)">
                <div className='admin_wrapper_block'>
                    <ul>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <p className='ml-0'>
                                        <Link to="/">‘You </Link> have invited johnsmith@gmail.com to become family member.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <p className='ml-0'>
                                        <Link to="/">‘You </Link> have invited johnsmith@gmail.com to become family member.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <p className='ml-0'>
                                        <Link to="/">‘You </Link> have invited johnsmith@gmail.com to become family member.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <p className='ml-0'>
                                        <Link to="/">‘You </Link> have invited johnsmith@gmail.com to become family member.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <p className='ml-0'>
                                        <Link to="/">‘You </Link> have invited johnsmith@gmail.com to become family member.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <p className='ml-0'>
                                        <Link to="/">‘You </Link> have invited johnsmith@gmail.com to become family member.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <p className='ml-0'>
                                        <Link to="/">‘You </Link> have invited johnsmith@gmail.com to become family member.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Recevied (5)">
                <div className='admin_wrapper_block'>
                    <ul>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <div className='admin_cm_pro_img_wrap'>
                                        <img src={person_1} alt="famaily person" />
                                    </div>
                                    <p>
                                        <Link to="/">John Smith </Link> have invited you to become his family member.
                                    </p>
                                </div>
                                <div className='member_block'>
                                    <button type='button' className='true_btn_cm'>
                                        <img src={check_ic} alt="ic" />
                                    </button>
                                    <button type='button' className='close_btn_cm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <div className='admin_cm_pro_img_wrap'>
                                        <img src={person_2} alt="famaily person" />
                                    </div>
                                    <p>
                                        <Link to="/">John Smith </Link> have invited you to become his family member.
                                    </p>
                                </div>
                                <div className='member_block'>
                                    <button type='button' className='true_btn_cm'>
                                    <img src={check_ic} alt="ic" />
                                    </button>
                                    <button type='button' className='close_btn_cm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <div className='admin_cm_pro_img_wrap'>
                                        <img src={person_3} alt="famaily person" />
                                    </div>
                                    <p>
                                        <Link to="/">John Smith </Link> have invited you to become his family member.
                                    </p>
                                </div>
                                <div className='member_block'>
                                    <button type='button' className='true_btn_cm'>
                                    <img src={check_ic} alt="ic" />
                                    </button>
                                    <button type='button' className='close_btn_cm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <div className='admin_cm_pro_img_wrap'>
                                        <img src={person_4} alt="famaily person" />
                                    </div>
                                    <p>
                                        <Link to="/">John Smith </Link> have invited you to become his family member.
                                    </p>
                                </div>
                                <div className='member_block'>
                                    <button type='button' className='true_btn_cm'>
                                        <img src={check_ic} alt="ic" />
                                    </button>
                                    <button type='button' className='close_btn_cm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <div className='admin_cm_pro_img_wrap'>
                                        <img src={person_5} alt="famaily person" />
                                    </div>
                                    <p>
                                        <Link to="/">John Smith </Link> have invited you to become his family member.
                                    </p>
                                </div>
                                <div className='member_block'>
                                    <button type='button' className='true_btn_cm'>
                                        <img src={check_ic} alt="ic" />
                                    </button>
                                    <button type='button' className='close_btn_cm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <div className='admin_cm_pro_img_wrap'>
                                        <img src={person_2} alt="famaily person" />
                                    </div>
                                    <p>
                                        <Link to="/">John Smith </Link> have invited you to become his family member.
                                    </p>
                                </div>
                                <div className='member_block'>
                                    <button type='button' className='true_btn_cm'>
                                        <img src={check_ic} alt="ic" />
                                    </button>
                                    <button type='button' className='close_btn_cm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='admin_list_block'>
                                <div className='admin_cm_pro_img_inner_block'>
                                    <div className='admin_cm_pro_img_wrap'>
                                        <img src={person_3} alt="famaily person" />
                                    </div>
                                    <p>
                                        <Link to="/">John Smith </Link> have invited you to become his family member.
                                    </p>
                                </div>
                                <div className='member_block'>
                                    <button type='button' className='true_btn_cm'>
                                        <img src={check_ic} alt="ic" />
                                    </button>
                                    <button type='button' className='close_btn_cm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Tab>
        </Tabs>
    )
}

export default Invitations