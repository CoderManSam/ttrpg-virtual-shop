import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import DmPage from './components/home/dmPage/DmPage';
import HomePage from './components/home/home/HomePage';
import PlayerPage from './components/home/playerPage/PlayerPage';
import DmShop from './components/shop/dmShop/DmShop';
import PlayerShop from './components/shop/playerShop/PlayerShop';
import LoginPage from './components/users/login/LoginPage.js';
import SignUpPage from './components/users/signUp/SignUpPage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route element={<AuthenticateUser />}> */}
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/dungeon-master' element={<DmPage />} />
        <Route path='/player' element={<PlayerPage />} />
        <Route path='/DM-shop' element={<DmShop/>} />
        <Route path='/player-shop' element={<PlayerShop/>} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
