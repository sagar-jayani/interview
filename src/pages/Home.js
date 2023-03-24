import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import Famaily from '../components/Famaily_Com';
import Invitations from '../components/Invitations_Com';

import cm_profile_ic from '../assets/img/cm_profile_ic.png'
import cm_camara_ic from '../assets/img/cm_camara_ic.png'
import location from '../assets/img/location.png'
import atm_card from '../assets/img/atm_card.png'
import user_settings_icon from '../assets/img/users-gear.png'
import search_ic from '../assets/img/search_ic.png'
import more_ic from '../assets/img/more_ic.png'


const Home = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const homeTab = (classs) => {
        if (document.body.getAttribute("tab-menu") === classs) {
            document.body.removeAttribute("tab-menu", classs)
        }
        else {
            document.body.setAttribute("tab-menu", classs)
        }
    }

    const profile_menu = (classs) => {
        if (document.body.getAttribute("profile_menu") === classs) {
            document.body.removeAttribute("profile_menu", classs)
        }
        else {
            document.body.setAttribute("profile_menu", classs)
        }
    }

    return (
        <div className='admin_panal_wrap'>
            <div className='cm_padding_wrap'>
                <div className='cm_title_and_view_hold'>
                    <div className='cm_common_title_wrap'>
                        <h2>My Account</h2>
                    </div>
                    <button type='button' className='cm_btn'>View Button</button>
                    <a href='#0'className='more_btn'>
                        <img src={more_ic} alt="more_ic" />
                    </a>

                    <div className='cm_success_message'>Success Meassage Here</div>
                </div>

                <div className='profile_tab_block'>
                    <button type='button' className='active' onClick={() => homeTab("profile")}>Profile</button>
                    <button type='button' onClick={() => homeTab("wallet")}>Wallet</button>
                    <button type='button' onClick={() => homeTab("activities")}>Activities</button>
                    <button type='button' onClick={() => homeTab("invitations")}>Invitations</button>
                </div>

                <div className='cm_profile_all_wrap'>
                    <div className="row">
                        <div className='col-md-9'>
                            <div className='cm_profile_if_wrap animated animatedFadeInUp fadeInUp active'>
                                <div className='cm_profile_if'>
                                    <div className='cm_profile_col'>
                                        <div className='position-relative' onClick={() => profile_menu("profile_menu")}>
                                            <div className='cm_profile_img'>
                                                <img src={cm_profile_ic} alt="profile" />
                                            </div>
                                            <div className='cm_camara_ic'>
                                                <img src={cm_camara_ic} alt="camara" />
                                            </div>
                                            <div className='cm_upload_block'>
                                                <button type='button'>Upload New</button>
                                                <button type='button'>Remove</button>
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
                                    <div className='cm_pr_input_col'>
                                        <div className='cm_input_wrap'>
                                            <label htmlFor="first_name">First Name :</label>
                                            <TextField
                                                id="first_name"
                                                label=""
                                                placeholder="First Name"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                        <div className='cm_input_wrap'>
                                            <label htmlFor="first_name">Phone :</label>
                                            <TextField
                                                id="first_name"
                                                label=""
                                                placeholder="Phone"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                        <div className='cm_input_wrap'>
                                            <label htmlFor="last_name">Last Name :</label>
                                            <TextField
                                                id="last_name"
                                                label=""
                                                placeholder="Last Name"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                        <div className='cm_input_wrap'>
                                            <label htmlFor="last_name">Graduction Year :</label>
                                            <TextField
                                                id="last_name"
                                                label=""
                                                placeholder="Graduction Year"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                        <div className='cm_input_wrap'>
                                            <label htmlFor="last_name">Email :</label>
                                            <TextField
                                                id="last_name"
                                                label=""
                                                placeholder="johnsmith@yahoo.com"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>


                                        <div className='cm_input_wrap'>
                                            <label htmlFor="last_name">Date if Birth :</label>
                                            <TextField
                                                id="last_name"
                                                label=""
                                                placeholder="Date if Birth"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                    </div>
                                    <div className='cm_all_btns'>
                                        <button type='button' className='cm_profile_btn cm_save_btn'>Save Changes</button>
                                        <button type='button' className='cm_profile_btn cm_change_pass'>Change Password</button>
                                        <button type='button' className='cm_profile_btn cm_leave_fam_btn'>Leave Family</button>
                                    </div>
                                </div>

                                <div className='famaily_info__block famaily_info__block_first'>
                                    <div className='activites_title_block'>
                                        <div className='cm_main_title'>
                                            <h2>Famaily</h2>
                                        </div>
                                        <div className='d-flex align-items-center serch_wrap'>
                                            <img src={search_ic} alt="ci" />
                                            <button type='button' className='edit_btn_wr view_btn'>Add New</button>
                                        </div>
                                    </div>
                                    <Famaily />
                                </div>
                            </div>

                            <div className='bank_details_info_block'>
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <div className='cm_bank_car_detail animated animatedFadeInUp fadeInUp'>
                                            <div className='cm_main_title'>
                                                <h2>Bank Account</h2>
                                            </div>
                                            <div className='cm_atm_card_details_block'>
                                                <div className='cm_atm_car_img_block'>
                                                    <div className='atm_card_img'>
                                                        <img src={atm_card} alt="atm" />
                                                    </div>
                                                    <div className='cm_bank_account_card_wrap'>
                                                        <p>
                                                            <span className='dots'>**** **** ****</span>
                                                            <span>5967</span>
                                                        </p>
                                                        <span>Expries 09/27</span>
                                                    </div>
                                                </div>
                                                <div className='cm_atm_car_img_block'>
                                                    <div className='atm_card_img'>
                                                        <img src={atm_card} alt="atm" />
                                                    </div>
                                                    <div className='cm_bank_account_card_wrap'>
                                                        <p>
                                                            <span className='dots'>**** **** ****</span>
                                                            <span>5967</span>
                                                        </p>
                                                        <span>Expries 09/27</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='cm_billing_add_wrap'>
                                            <div className='cm_main_title'>
                                                <h2>Blling Address</h2>
                                            </div>
                                            <div className='home_address_wrap'>
                                                <div className='home_check_block'>
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Same as Home Address" />
                                                </div>
                                                <div className="cm_blling_add_info_wrap">
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='cm_input_wrap'>
                                                                <label htmlFor="first_name">First Name :</label>
                                                                <TextField
                                                                    id="blling_ifirst_name"
                                                                    label=""
                                                                    placeholder="First Name"
                                                                    multiline
                                                                    variant="standard"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='cm_input_wrap'>
                                                                <label htmlFor="blling_first_name">Last Name :</label>
                                                                <TextField
                                                                    id="blling_first_name"
                                                                    label=""
                                                                    placeholder="Last Name"
                                                                    multiline
                                                                    variant="standard"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='cm_input_wrap'>
                                                                <label htmlFor="blling_address_line_1">Address Line 1 :</label>
                                                                <TextField
                                                                    id="blling_address_line_1"
                                                                    label=""
                                                                    placeholder="Last Name"
                                                                    multiline
                                                                    variant="standard"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='cm_input_wrap'>
                                                                <label htmlFor="blling_address_line_2">Address Line 2 :</label>
                                                                <TextField
                                                                    id="blling_address_line_2"
                                                                    label=""
                                                                    placeholder="Last Name"
                                                                    multiline
                                                                    variant="standard"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='cm_input_wrap common_select_block'>
                                                                        <label htmlFor="blling_address_line_2">Country</label>
                                                                        <Select
                                                                            value={age}
                                                                            onChange={handleChange}
                                                                            displayEmpty
                                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                                        >
                                                                            <MenuItem value="">
                                                                                <p>None</p>
                                                                            </MenuItem>
                                                                            <MenuItem value={10}>Ten</MenuItem>
                                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                                        </Select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className='cm_input_wrap common_select_block'>
                                                                        <label htmlFor="blling_address_line_2">State/Province/Region</label>
                                                                        <Select
                                                                            value={age}
                                                                            onChange={handleChange}
                                                                            displayEmpty
                                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                                        >
                                                                            <MenuItem value="">
                                                                                <p>None</p>
                                                                            </MenuItem>
                                                                            <MenuItem value={10}>Ten</MenuItem>
                                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                                        </Select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='cm_input_wrap'>
                                                                        <label htmlFor="city">City :</label>
                                                                        <TextField
                                                                            id="city"
                                                                            label=""
                                                                            placeholder="Enter City Name"
                                                                            multiline
                                                                            variant="standard"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className='cm_input_wrap'>
                                                                        <label htmlFor="zip_code">Zip Code :</label>
                                                                        <TextField
                                                                            id="zip_code"
                                                                            label=""
                                                                            placeholder="Enter Zip Code"
                                                                            multiline
                                                                            variant="standard"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='edit_details_wrap'>
                                                    <button type='button' className='edit_btn_wr'>Edit Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className="activites_block animated animatedFadeInUp fadeInUp">
                                            <div className='activites_title_block'>
                                                <div className='cm_main_title'>
                                                    <h2>Activites</h2>
                                                </div>
                                                <button type='button' className='edit_btn_wr view_btn'>View All</button>
                                            </div>
                                            <div className='activites_info_block'>
                                                <ul>
                                                    <li>
                                                        <div className='activites_info_inner_block'>
                                                            <div className='activites_icon_block'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec_info'>
                                                                <h3>Leslie Alexander updated her <Link to="/">Account Type</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner_block'>
                                                            <div className='activites_icon_block'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec_info'>
                                                                <h3>John Smith removed Mark Fleix from <Link to="/">Family member</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner_block'>
                                                            <div className='activites_icon_block'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec_info'>
                                                                <h3>Leslie Alexander updated her <Link to="/">Account Type</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner_block'>
                                                            <div className='activites_icon_block'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec_info'>
                                                                <h3>John Smith removed Mark Fleix from <Link to="/">Family member</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner_block'>
                                                            <div className='activites_icon_block'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec_info'>
                                                                <h3>Leslie Alexander updated her <Link to="/">Account Type</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner_block'>
                                                            <div className='activites_icon_block'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec_info'>
                                                                <h3>John Smith removed Mark Fleix from <Link to="/">Family member</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner_block'>
                                                            <div className='activites_icon_block'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec_info'>
                                                                <h3>Leslie Alexander updated her <Link to="/">Account Type</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner_block'>
                                                            <div className='activites_icon_block'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec_info'>
                                                                <h3>John Smith removed Mark Fleix from <Link to="/">Family member</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='famaily_info__block recevied_block animated animatedFadeInUp fadeInUp'>
                                            <div className='activites_title_block'>
                                                <div className='cm_main_title'>
                                                    <h2>Invitations</h2>
                                                </div>
                                            </div>
                                            <Invitations />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 famaily_inforamtions'>
                            <div className='famaily_info__block famaily_info__block_first'>
                                <div className='activites_title_block'>
                                    <div className='cm_main_title'>
                                        <h2>Famaily</h2>
                                    </div>
                                    <div className='d-flex align-items-center serch_wrap'>
                                    <img src={search_ic} alt="ci" />
                                        <button type='button' className='edit_btn_wr view_btn'>Add New</button>
                                    </div>
                                </div>

                                <Famaily />
                            </div>

                            <div className='famaily_info__block recevied_block animated animatedFadeInUp fadeInUp'>
                                <div className='activites_title_block'>
                                    <div className='cm_main_title'>
                                        <h2>Invitations</h2>
                                    </div>
                                </div>
                                <Invitations />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Home