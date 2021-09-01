const getScore = async (url) => {
  const score = await fetch(url);
  return score.json();
};

const displayScores = ((score) => {
  document.getElementById('displayList');
});

export { getScore, displayScores };