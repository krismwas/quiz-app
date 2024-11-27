import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("error"));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question ?</p>
      </Main>
    </div>
  );
}
