import logo from './logo.svg';
import './App.css';
import UserIndex from './userIndex.js';
import DriverIndex from './driverIndex.js';
import MessageIndex from './messageIndex.js';
import PassengerIndex from './passengerIndex.js';
import ReviewIndex from './reviewIndex.js';
import TripIndex from './tripIndex.js'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <UserIndex />
        <DriverIndex />
        <MessageIndex />
        <PassengerIndex />
        <ReviewIndex />
        <TripIndex />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
