// Import the express library
import express from'express';
const app = express();  // Create an Express application
const PORT = 3001;  // Port where the server will listen

// Middleware to parse JSON bodies (this will help with POST requests)
app.use(express.json());

// CORS Middleware to allow requests from different origins
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Define a route to handle symptom checks
app.get('/api/check-symptoms', (req, res) => {
    // For now, just return a dummy response
    const symptoms = req.query.symptoms;
    if (symptoms.includes("fever")) {
        res.json({ likelyCondition: "Flu" });
    } else {
        res.json({ likelyCondition: "Unknown" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
