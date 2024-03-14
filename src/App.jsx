import './App.scss'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const Profile = lazy(() => import('./pages/profile/Profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}> {/* Bileşenler yüklenirken gösterilecek UI */}
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
