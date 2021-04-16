import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../../StateProvider'
import firebase from '../../firebase'
import './Account.css'
import { useHistory } from 'react-router'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Account() {
    const [{user}] = useStateValue();
    const auth = firebase.auth();
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        history.push("/");
        auth.signOut();
        alert("You are now logged out")
    }

    const handleClick = (e) => {
        e.preventDefault();
        history.push("/");
    }
    return (
        <>
            <div className="topHead">
                <ArrowBackIosIcon style={{ marginLeft: '15px', marginRight: '15px', cursor: 'pointer', color: 'black', marginTop: '5px'}} onClick={handleClick}/>
                <h4 className="top">Profile</h4>
            </div>
            <div className="account">
            <Avatar alt='account-picture' style={{ height: '150px', width: '150px', fontSize: '50px' }} src={user.photoURL}>{user.email.charAt(0).toUpperCase()}</Avatar>
            <h4>{user.email}</h4>
            <Button variant="contained" color='primary' style={{ width: '100%', height: '3rem' }} onClick={handleLogout}>Logout</Button>
            <div className='spacing'><br/></div>
        </div>
        </>
    )
}

export default Account
