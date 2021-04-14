import { useEffect } from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/Header'
import Account from './pages/account/Account';
import Booking from './pages/booking/Booking';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { useStateValue } from './StateProvider';
import firebase from './firebase'

function App() {

  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const auth = firebase.auth();
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
    //  console.log("auth user is", authUser ? authUser.email : authUser);
   
     if (authUser) {
       // user just logged in
       dispatch({
         type: "SET_USER",
         user: authUser,
       })
     } else {
       // user is logged out
       dispatch({
         type: "SET_USER",
         user: null,
       });
     }
   });
   return () => {
     unsubscribe()
   }
     }, [dispatch])


  return (
    <div className="app">
     { user ? (
     <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bookings" exact component={Booking} />
        <Route path="/account" exact component={Account} />
      </Switch>
      <Header />
      </>
      ) : (
        <>
        <Login />
        </>
      )}
    </div>
  );
}

export default App;
