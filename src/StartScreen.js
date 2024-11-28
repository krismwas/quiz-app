function StartScreen({ numOfQuestion }) {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{numOfQuestion} questions to test your react mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
