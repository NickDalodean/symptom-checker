import React, { useState } from 'react';

function SymptomChecker() {
    const [symptoms, setSymptoms] = useState('');
    const [possibleIllnesses, setPossibleIllnesses] = useState([]);

    const symptomsToIllnesses = {
        "fever": ["Flu", "Common Cold", "Pneumonia"],
        "cough": ["Bronchitis", "Pneumonia", "Asthma"],
        "headache": ["Migraine", "Tension Headache", "Sinusitis"],
        "fatigue": ["Anemia", "Chronic Fatigue Syndrome", "Depression"],
        "sore throat": ["Strep Throat", "Common Cold", "Flu"],
        "nausea": ["Food Poisoning", "Stomach Virus", "Motion Sickness"],
        "vomiting": ["Gastroenteritis", "Food Poisoning", "Pregnancy"],
        "diarrhea": ["Gastroenteritis", "Food Poisoning", "Irritable Bowel Syndrome"],
        "abdominal pain": ["Appendicitis", "Gastroenteritis", "Kidney Stones"],
        "chest pain": ["Heart Attack", "Angina", "Pneumonia"],
        "shortness of breath": ["Asthma", "Chronic Obstructive Pulmonary Disease", "Heart Failure"],
        "dizziness": ["Vertigo", "Inner Ear Infection", "Dehydration"],
        "muscle aches": ["Flu", "Fibromyalgia", "Lyme Disease"],
        "joint pain": ["Arthritis", "Lupus", "Gout"],
        "rash": ["Allergic Reaction", "Eczema", "Psoriasis"],
        "swelling": ["Injury", "Infection", "Allergic Reaction"],
        "difficulty swallowing": ["Esophagitis", "Throat Cancer", "GERD"],
        "burning sensation": ["Urinary Tract Infection", "Gastritis", "Peripheral Neuropathy"],
        "lump": ["Cancer", ""]
        // Add more mappings as needed
    };
    const checkPossibleIllnesses = (inputSymptoms) => {
        const userSymptoms = inputSymptoms.toLowerCase().split(',').map(symptom => symptom.trim());
        let illnesses = [];

        userSymptoms.forEach(symptom => {
            if (symptomsToIllnesses.hasOwnProperty(symptom)) {
                illnesses = [...illnesses, ...symptomsToIllnesses[symptom]];
            }
        });

        setPossibleIllnesses(illnesses);
    };

    const handleInputChange = (event) => {
        setSymptoms(event.target.value);
        checkPossibleIllnesses(event.target.value);
    };

    return (
        <div className="symptomChecker">
            <h1>Enter Your Symptoms</h1>
            <textarea
                value={symptoms}
                onChange={handleInputChange}
                placeholder="Describe your symptoms here (comma-separated)"
            />
            {possibleIllnesses.length > 0 && (
                <div>
                    <p>Possible Illnesses:</p>
                    <ul>
                        {possibleIllnesses.map((illness, index) => (
                            <li key={index}>{illness}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SymptomChecker;
