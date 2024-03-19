import './App.css'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));
const Notfound = lazy(() => import('./pages/notfound/NotFound'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
