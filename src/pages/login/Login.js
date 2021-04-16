import { Button, TextField } from '@material-ui/core'
import firebase from '../../firebase'
import React from 'react'
import './Login.css'

function Login() {

    const [ON, setON] = React.useState(false);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const auth = firebase.auth();

    const handleLogin = (e) => {
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            alert("You are now logged in");
        }).catch((event) => alert(event.message));
    }

    const handleRegister = (e) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            alert("Sign up successful")
            handleLogin();
        }).catch((e) => alert(e.message));
    }

    // This is for native android
    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     const googleUser = await Plugins.GoogleAuth.signIn(null);
    //     console.log('user: ', googleUser);
    //     dispatch({
    //         type: "SET_USER",
    //         user: googleUser,
    //     })
        
    // }



    return (
        <div className="login">
            <h1 style={{ marginBottom: '5rem' }}>Animal<strong style={{ color: 'pink'}}>Pin</strong></h1>

            <TextField type="email" id="outlined-basic" label="Email" variant="outlined" style={{ background: 'white', borderRadius: '4px', width: '100%', marginBottom: '10px' }} value={email} onChange={(e) => setEmail(e.target.value)}/>

            <TextField type="password" id="outlined-basic" label="Password" variant="outlined" style={{ background: 'white', borderRadius: '4px', width: '100%', marginBottom: '10px' }} value={password} onChange={(e) => setPassword(e.target.value)}/>

            <Button variant="contained" color="primary" style={{ width: '100%', height: '3rem'}} onClick={ON ? handleRegister : handleLogin}>
                {ON ? 'Signup' : 'Login'}
            </Button>

            <strong style={{ marginTop: '15px'}} onClick={(e) => setON(!ON)}>{ON ? 'Already have an account?' : 'Dont have an account yet'}?</strong>
        </div>
    )
}

export default Login
