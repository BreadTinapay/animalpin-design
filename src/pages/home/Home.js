import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Home.css'
import { IconButton } from '@material-ui/core';
import CardCo from '../../components/cards/CardCo';

function Home() {

    const image = "https://images.pexels.com/photos/3198001/pexels-photo-3198001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    // const image2 = "https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const image3 = "https://images.pexels.com/photos/5705624/pexels-photo-5705624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    return (
        <div className="home">
            <div className="topCon">
                <p>Location </p>
                <ArrowDropDownIcon style={{fontSize: "15px", color: "lightblue"}} />
            </div>

            <div className="address">
                <p><strong>Cebu City,</strong> PH</p>
                <div className="inner">
                    <IconButton aria-label="search" style={{ margin: '0', padding: '0'}}>
                        <SearchOutlinedIcon style={{ padding: '5px', backgroundColor: 'rgb(236, 236, 236)', fontSize: '40px', borderRadius: '5px', marginRight: '5px' }}/>
                    </IconButton>

                    <IconButton aria-label="notify" style={{ margin: '0', padding: '0'}}>
                        <NotificationsNoneOutlinedIcon  style={{ padding: '5px', backgroundColor: 'rgb(236, 236, 236)', fontSize: '40px', borderRadius: '5px' }}/>
                    </IconButton>
                </div>
            </div>

            <div className="homeCard">
                <CardCo 
                image={image} 
                title="Daycare" 
                desc="We take care of your pets in times of need and provide them with top of the line technology" 
                btn="Learn more" />
            </div>
            <div className="form">
                <strong>Book</strong>
            </div>
            
            <div className="homeCard">
                <CardCo 
                image={image3} 
                title="Pet Walking" 
                desc="We make sure to walk your pets in safety and make sure they are completely fine" 
                btn="Book" />
            </div>
        </div>
    )
}

export default Home
