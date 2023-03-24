import React from 'react'
import person_1 from '../assets/img/person_1.png'
import person_2 from '../assets/img/person_2.png'
import person_3 from '../assets/img/person_3.png'
import person_4 from '../assets/img/person_4.png'
import person_5 from '../assets/img/person_5.png'
import users_ic from '../assets/img/user_ic.png'

const Famaily = () => {
    return (
        <div className='admin_wrapper_block'>
            <ul>
                <li>
                    <div className='admin_list_block orage_bg'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_1} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_admin_btn'>
                                ADMIN
                            </button>
                            <button type='button' className='admin_cm_profile_btn'>
                            <img src={users_ic} alt="ic" />
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
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_block'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_5} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_block'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_2} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_block'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_4} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_block'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_5} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_block'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_3} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_block'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_1} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_block'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_2} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_block'>
                        <div className='admin_cm_pro_img_inner_block'>
                            <div className='admin_cm_pro_img_wrap'>
                                <img src={person_4} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_block'>
                            <button type='button' className='cm_member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Famaily