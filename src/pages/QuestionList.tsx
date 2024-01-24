import { useParams } from "react-router-dom";
import GameOver from "../components/GameOver";
import Game from "../components/Game";

export default function QuestionList() {
  const { type } = useParams();
  console.log(type);

  const isGameOver = true;

  return (
    <div className="mt-32">
      <div className="container mx-auto max-w-xl flex flex-col items-center px-6">
        {isGameOver ? <GameOver /> : <Game />}
      </div>
    </div>
  );
}
