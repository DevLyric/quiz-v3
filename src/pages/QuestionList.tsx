import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import GameOver from "../components/GameOver";
import Game from "../components/Game";
import { IQuestionData, questionsData } from "../data/questionsData";
import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function QuestionList() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const { type } = useParams();

  // Filtrar as questões baseadas no type
  const filteredQuestions: IQuestionData[] = questionsData.filter(
    (question) => question.category === type
  );

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isGameOver = currentQuestionIndex >= filteredQuestions.length;

  const handleSelectAnswer = (answer: string) => {
    setProgress(progress + filteredQuestions.length);
    // passar o index quando a respostas for selecionada
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // se a resposta estiver certa, então aumente o score em 1
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const updateScore = async () => {
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const currentScore = userDocSnapshot.data().score || 0;
          const updateScore = currentScore + score;

          await updateDoc(userDocRef, { score: updateScore });
          console.log("Score updated on Firestore successfully!");
        } else {
          console.error("User document not found in Firestore.");
        }
      } catch (error) {
        console.error("Error updating score in Firestore:", error);
      }
    }
  };

  useEffect(() => {
    if (isGameOver && user) {
      updateScore();
    }
  }, [isGameOver, user, score]);

  return (
    <div className="mt-32">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
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
