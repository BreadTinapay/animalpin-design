import React from 'react'
import './Header.css'
import { HomeOutlined  } from '@material-ui/icons';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="floater">
                <IconButton aria-label="home">
                    <Link to="/" className="link"><HomeOutlined fontSize="large" color='disabled' /></Link>
                </IconButton>

                <IconButton aria-label="book">
                    <Link to="/bookings"><BookOutlinedIcon fontSize="large" color='disabled' /></Link>
                </IconButton>

                <IconButton aria-label="account">
                    <Link to="/account" ><AccountCircleOutlinedIcon fontSize="large" color='disabled' /></Link>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
