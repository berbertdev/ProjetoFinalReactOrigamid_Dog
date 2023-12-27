import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UserStorage } from './UserContext.jsx';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login/*" element={<Login />}></Route>
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};
export default App;
