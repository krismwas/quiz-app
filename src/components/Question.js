import Options from "./Options";

function Question({ questions }) {
  console.log(questions);

  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} />
    </div>
  );
}

export default Question;
