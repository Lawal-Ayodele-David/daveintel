import React from 'react';
import './dollaApp.css'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Navbar from'./webcomponents/Navbar';
;
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SigninPage/>} /> 
            </Routes>
        </Router>
    );
};

export default App;