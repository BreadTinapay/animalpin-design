import React from 'react'
import CardCo from '../../components/cards/CardCo'
import { useStateValue } from '../../StateProvider'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom'
import './Booking.css'

function Booking() {
    const [{info}] = useStateValue();
    const image = "https://images.pexels.com/photos/5705624/pexels-photo-5705624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        history.push("/");
    }

    return (
        <div className="booking">
            <div className="titleCon">
            <ArrowBackIosIcon style={{ marginLeft: '15px', marginRight: '15px', cursor: 'pointer'}} onClick={handleClick}/>
            <h4 className="title">My Bookings</h4>
            </div>
            {info.map((client) => {
                return (
                    <div className="container" key={client.id}>
                    <CardCo title={client.name} desc={client.date} btn={"View"} image={image} walk={"Pet Walking"} num={client.num} often={client.value} id={client.id}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Booking
