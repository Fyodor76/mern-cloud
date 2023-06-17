import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from 'react-redux';

import {useEffect, useState} from 'react';


import {Login} from './components/LoginPage/Login';
import {Registration} from './components/RegistrationPage/Registration';
import {ForgetPassword} from './components/ForgetPassPage/ForgetPassword';
import {MainPage} from './Pages/MainPage/MainPage';
import {auth} from './actions/user';
import {Profile} from './Pages/Profile/Profile';
import {Header} from './components/Header/Header';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (async function () {
      await dispatch(auth());
      setIsLoading(false);
    })();

  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate('/main-page');
    } else {
      navigate('/');
    }
  }, [isAuth]);


  return (
    <>
      {isLoading ?
        <div className="loader">
          <CircularProgress />
        </div>
        :
        <div className="App">
          { !isAuth &&
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Routes>
          }
          {isAuth &&
            <div>
              <Header/>
              <Routes>
                <Route path="/main-page" element={<MainPage />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>}
        </div>}
    </>
  );
}

export default App;
