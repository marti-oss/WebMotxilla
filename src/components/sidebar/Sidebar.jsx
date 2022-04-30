import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        
        <div className='sidebar'>
            <div className="top">
                <Link to="/">
                <span className="logo">
                    Motxilla admin
                </span>
                </Link>     
            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Link to="/">
                            <DashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </Link>
                        
                    </li>
                    <p className="title">PERSONAL</p>
                    <li>
                        <Link to="/monitor">
                            <EmojiPeopleIcon className="icon"/>Monitors
                        </Link>
                    </li>
                    <li>
                        <Link to="/nen">
                            <ChildCareIcon className="icon"/>Nens
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/equip">
                            <GroupsIcon className="icon"/>Equips
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar