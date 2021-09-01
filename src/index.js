import './style.css';
import sendScores from './sendScore.js';
import {
  getScore, displayScores,
} from './displayScore.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cBwggmeAGqWQuMgI7VlC/scores/';
const form = document.getElementById('gameForm');
const refreshBtn = document.getElementById('refreshBtn');
const userName = document.getElementById('nameText');
const userScore = document.getElementById('scoreText');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendScores(url, userName, userScore);
});

refreshBtn.addEventListener('click', () => {
  getScore(url).then((data) => { displayScores(data); });
});