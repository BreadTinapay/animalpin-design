import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/Header'
import Account from './pages/account/Account';
import Booking from './pages/booking/Booking';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bookings" exact component={Booking} />
        <Route path="/account" exact component={Account} />
      </Switch>
      <Header />

    </div>
  );
}

export default App;
