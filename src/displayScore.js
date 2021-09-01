const getScore = async (url) => {
  const score = await fetch(url);
  return score.json();
};

const displayScores = ((scores) => {
  const scoreArray = scores.result;
  const scoreDetail = scoreArray.map((b) => `
    <li>${b.user} : ${b.score}</li>
  `).join('');
  document.getElementById('displayList').innerHTML = `${scoreDetail}`;
});

export { getScore, displayScores };