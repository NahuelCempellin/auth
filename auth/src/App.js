import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './component/home/home';
import Nav from './component/Nav/nav';


function App() {
  
  return (
    <div className="App">
     <Nav/>
     <Home/>
     
    </div>
  );
}

export default App;
