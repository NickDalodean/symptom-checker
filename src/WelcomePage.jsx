import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div className="welcomePage">
            <h1>Welcome to the Symptom Checker</h1>
            <p>This tool helps you identify possible conditions based on the symptoms you provide.</p>
            <button onClick={() => navigate('/check-symptoms')}>Get Started</button>
        </div>
    );
}

export default WelcomePage;
