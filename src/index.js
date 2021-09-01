import './style.css';
import sendScores from './sendScore.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BT0dBrz8PnCOOMBT0tZ4/scores/';
const form = document.getElementById('gameForm');
const userName = document.getElementById('nameText');
const userScore = document.getElementById('scoreText');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const result = sendScores(url, userName, userScore);
  console.log(result);
});