export interface IQuestionData {
  id: number;
  question: string;
  answer: string;
  type: string;
  options: string[];
}

export const questionsData: IQuestionData[] = [
  {
    id: 1,
    question: "Who is the president of the United States?",
    answer: "Joe Biden",
    type: "general",
    options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Washington"],
  },
  {
    id: 2,
    question: "What is the capital of France?",
    answer: "Paris",
    type: "general",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    id: 3,
    question: "What is the boiling point of water in Celsius?",
    answer: "100°C",
    type: "science",
    options: ["0°C", "50°C", "100°C", "150°C"],
  },
  {
    id: 4,
    question: "Who directed the movie 'Inception'?",
    answer: "Christopher Nolan",
    type: "movies",
    options: [
      "Steven Spielberg",
      "James Cameron",
      "Christopher Nolan",
      "Quentin Tarantino",
    ],
  },
];
