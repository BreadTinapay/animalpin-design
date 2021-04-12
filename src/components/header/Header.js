import React from 'react'
import './Header.css'
import { HomeOutlined  } from '@material-ui/icons';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="floater">
                <IconButton aria-label="home">
                    <HomeOutlined fontSize="large" color='disabled' />
                </IconButton>

                <IconButton aria-label="book">
                <BookOutlinedIcon fontSize="large" color='disabled' />
                </IconButton>

                <IconButton aria-label="account">
                <AccountCircleOutlinedIcon fontSize="large" color='disabled' />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
