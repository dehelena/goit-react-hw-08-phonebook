import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Layout from './Layout/Layout';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import Register from 'pages/Register';
import Login from 'pages/Login';
// import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks';
// import { useEffect } from 'react';
// import { fetchUserInfo } from 'redux/auth/operations';

const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(fetchUserInfo());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
