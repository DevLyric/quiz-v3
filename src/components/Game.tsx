interface IGame {
  question: string;
  options: string[];
  onSelectAnswer: (option: string) => void;
}

export default function Game({ question, options, onSelectAnswer }: IGame) {
  return (
    <>
      <h1 className="text-3xl text-center font-semibold">{question}</h1>
      <div className="flex flex-col gap-3 text-center mt-8">
        {options.map((option) => (
          <button
            onClick={() => onSelectAnswer(option)}
            key={option}
            className="rounded p-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white hover:scale-105 transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
