import { useState } from "react";
import { useParams } from "react-router-dom";
import GameOver from "../components/GameOver";
import Game from "../components/Game";
import { IQuestionData, questionsData } from "../data/questionsData";

export default function QuestionList() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const { type } = useParams();

  // Filtrar as questões baseadas no type
  const filteredQuestions: IQuestionData[] = questionsData.filter(
    (question) => question.category === type
  );

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isGameOver = currentQuestionIndex >= filteredQuestions.length;

  const handleSelectAnswer = (answer: string) => {
    // passar o index quando a respostas for selecionada
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // se a resposta estiver certa, então aumente o score em 1
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="mt-32">
      <div className="container mx-auto max-w-xl flex flex-col items-center px-6">
        {isGameOver ? (
          <GameOver
            score={score}
            numberOfQuestions={filteredQuestions.length}
          />
        ) : (
          <Game
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelectAnswer={handleSelectAnswer}
          />
        )}
      </div>
    </div>
  );
}
