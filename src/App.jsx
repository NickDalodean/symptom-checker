import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import SymptomChecker from './SymptomChecker';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/check-symptoms" element={<SymptomChecker />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
