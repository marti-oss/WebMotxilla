import React, {Component} from "react";
import "./navbar.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link, Navigate } from "react-router-dom";
import Logo from "../../components/logo/Logo"

const Navbarr = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="logo">
                        <Link to="/">
                            <Logo style={{with:0}}></Logo>
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <span onClick={() => {window.location.href = '/monitor'}}>
                        <Link to="/monitor">
                            <EmojiPeopleIcon className="icon"/>Monitors
                        </Link>
                    </span>
                    <span onClick={() => {window.location.href = '/nen'}}>
                        <Link to="/nen">
                            <ChildCareIcon className="icon"/>Nens
                        </Link>
                    </span>
                    <span onClick={() => {window.location.href = '/equip'}}>
                        <Link to="/equip">
                            <GroupsIcon className="icon"/>Equips
                        </Link>
                    </span>
                    
                    
                    
                </div>
                <div className="items">
                    <div className="item">
                        <span>
                            <Link to="/login">
                                <LogoutIcon/>
                            </Link>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbarr 