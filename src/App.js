import logo from './logo.svg';
import './App.css';
import Profile from './components/CustomerProfile';
import ContactsList from './components/ContactsList';
import Routes from './Router';

function App() {
  return (
    <div className="App">
      <Routes />
      <Profile />
      <ContactsList />
    </div>
  );
}

export default App;
