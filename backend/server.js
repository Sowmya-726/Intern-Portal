// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

// Dummy user data
const userData = {
  name: "Sowmya Reddy",
  referralCode: "sowmya2025",
  donations: 5000,
  rewards: [
    "Certificate of Excellence",
    "Amazon Gift Card",
    "Exclusive Webinar Access",
  ],
};

// Dummy leaderboard data
const leaderboard = [
  { name: "Alice", donations: 12000 },
  { name: "Bob", donations: 8500 },
  { name: "Sowmya Reddy", donations: 5000 },
  { name: "David", donations: 4000 },
];

app.get("/api/user", (req, res) => {
  res.json(userData);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
