import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
        <img 
            className="header_icon" 
             src="https://cdn.iconscout.com/icon/free/png-512/airbnb-11-722672.png"
             alt="icon"/>

             <div className="header_center">
                 <input type ="text" />
                 <SearchIcon />
             </div>

             <div className="header_right">
                 <p>Airbnb Platform</p>
                 <LanguageIcon />
                 <ExpandMoreIcon />
                 <Avatar />

             </div>
        </div>
    )
}

export default Header
