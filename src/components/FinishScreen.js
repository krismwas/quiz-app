function FinishScreen({ points, maxPossiblePoints, highScore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)})%
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
    </>
  );
}

export default FinishScreen;
