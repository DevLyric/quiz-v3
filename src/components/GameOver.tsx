import { Link } from "react-router-dom";

interface IGameOver {
  score: number;
  numberOfQuestions: number;
}

export default function GameOver({ score, numberOfQuestions }: IGameOver) {
  return (
    <>
      <h1 className="text-center text-2xl font-semibold mb-4">
        Congratulations! You answered {score} out of {numberOfQuestions}{" "}
        questions correctly.
      </h1>

      <p className="text-center">
        If you'd like to see your name on the leaderboard,{" "}
        <Link to="/signIn" className="text-blue-500 font-semibold">
          log in
        </Link>{" "}
        or{" "}
        <Link to="/signUp" className="text-blue-500 font-semibold">
          sign up
        </Link>{" "}
        now!
      </p>
    </>
  );
}
