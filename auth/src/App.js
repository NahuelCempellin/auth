import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './component/login';
import LogoutButton from './component/logout';
import Profile from './component/Nav/profile';

function App() {
  const{isAutenticated}=useAuth0();
  return (
    <div className="App">
     
     <LoginButton/>
     <LogoutButton/>
     <Profile/>
    </div>
  );
}

export default App;
