import React from 'react'
import CardCo from '../../components/cards/CardCo'
import { useStateValue } from '../../StateProvider'
import './Booking.css'

function Booking() {
    const [{info}] = useStateValue();
    const image = "https://images.pexels.com/photos/5705624/pexels-photo-5705624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    return (
        <div className="booking">
            <h1>My Bookings</h1>
            {info.map((client) => {
                return (
                    <div className="container" key={client.id}>
                    <CardCo title={client.name} desc={client.date} btn={"View"} image={image} walk={"Pet Walking"} num={client.num} often={client.value}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Booking
