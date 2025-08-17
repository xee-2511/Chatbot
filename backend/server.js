// server.js
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow requests from frontend
app.use(express.json());

// TMDB API Key from .env file
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Route to get movie suggestions by genre
app.get("/movies", async (req, res) => {
  try {
    const genre = req.query.genre || "action";

    // Fetch movies from TMDB API
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        with_genres: genre, // genre id, not text
        sort_by: "popularity.desc",
        language: "en-US",
        page: 1
      }
    });

    res.json(response.data.results);
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
