const sendScores = async (url, userName, userScore) => {
  const gameResult = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: userName.value,
      score: userScore.value,
    }),
  });
  userName.value = '';
  userScore.value = '';
  return gameResult.json();
};

export default sendScores;