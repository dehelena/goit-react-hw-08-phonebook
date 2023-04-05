import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import SharedLayout from './SharedLayout/SharedLayout';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<SharedLayout />} />
      </Routes>
    </div>
  );
};

export default App;
