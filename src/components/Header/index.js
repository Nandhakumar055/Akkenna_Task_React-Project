import {useState}  from 'react';

import { HiMiniBars3 } from "react-icons/hi2";
import { GiTireIronCross } from "react-icons/gi";

import './index.css'

const Header = () => {
    const [hamburgerToggle, setHamburgerToggle] = useState(false);

    const onClickHamburger = () => {
        setHamburgerToggle(!hamburgerToggle)
    }

    const isDisplayNavigationItems =  hamburgerToggle ? "small-device-nav-items-container" : "not-display-nav-items-container"


    return(
        <div className="header-section-container">
            <div className="small-device-header-container">
                <img src="https://i.ibb.co/QKCBvvk/Asset-2100-5.png" className='website-image' alt="Website Name" />
                <div className='button-and-hamburger'>
                    <button className="contact-button">Contact Us</button>
                    {hamburgerToggle ? (<GiTireIronCross className="cross-mark-icon" size={25} onClick={onClickHamburger}/>  ) : (<HiMiniBars3 className="nav-bar-icon" size={25} onClick={onClickHamburger}/>)}
                </div>
            </div>
            <ul className={isDisplayNavigationItems}>
                <li className='nav-item'>About Us</li>
                <li className='nav-item'>Services</li>
                <li className='nav-item'>Developers</li>
                <li className='nav-item'>Animations</li>
                <li className='nav-item'>Products</li>
                <li className='nav-item'>Blogs</li>
                <li className='nav-item'>Portfolio</li>
                <li className='nav-item'>Careers</li>
            </ul>
            <div className='large-device-header-container'>
                <img src="https://i.ibb.co/QKCBvvk/Asset-2100-5.png" className='website-image' alt="Website Name" />
                <ul className="large-device-nav-items-container">
                    <li className='nav-item'>About Us</li>
                    <li className='nav-item'>Services</li>
                    <li className='nav-item'>Developers</li>
                    <li className='nav-item'>Animations</li>
                    <li className='nav-item'>Products</li>
                    <li className='nav-item'>Blogs</li>
                    <li className='nav-item'>Portfolio</li>
                    <li className='nav-item'>Careers</li>
                    <li className='nav-item'>
                        <button className="contact-button">Contact Us</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header