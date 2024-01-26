export interface IQuestionData {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

export const questionsData: IQuestionData[] = [
  // General Questions
  {
    id: 1,
    question: "Who is the president of the United States?",
    correctAnswer: "Joe Biden",
    category: "general",
    options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Washington"],
  },
  {
    id: 2,
    question: "What is the capital of France?",
    correctAnswer: "Paris",
    category: "general",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    id: 3,
    question: "Who wrote 'The Catcher in the Rye'?",
    correctAnswer: "J.D. Salinger",
    category: "general",
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "J.K. Rowling",
      "J.D. Salinger",
    ],
  },
  {
    id: 4,
    question: "In which year did World War II end?",
    correctAnswer: "1945",
    category: "general",
    options: ["1918", "1939", "1945", "1955"],
  },
  {
    id: 5,
    question: "What is the currency of Japan?",
    correctAnswer: "Yen",
    category: "general",
    options: ["Won", "Yuan", "Yen", "Ringgit"],
  },
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    correctAnswer: "Leonardo da Vinci",
    category: "general",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
  },
  {
    id: 7,
    question: "In which year did the Berlin Wall fall?",
    correctAnswer: "1989",
    category: "general",
    options: ["1975", "1989", "1995", "2001"],
  },
  {
    id: 8,
    question: "What is the largest planet in our solar system?",
    correctAnswer: "Jupiter",
    category: "general",
    options: ["Venus", "Mars", "Saturn", "Jupiter"],
  },
  {
    id: 9,
    question: "What is the boiling point of water in Fahrenheit?",
    correctAnswer: "212°F",
    category: "general",
    options: ["32°F", "50°F", "100°F", "212°F"],
  },
  {
    id: 10,
    question: "Who wrote 'Hamlet'?",
    correctAnswer: "William Shakespeare",
    category: "general",
    options: [
      "Jane Austen",
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
    ],
  },

  // Science Questions
  {
    id: 11,
    question: "What is the chemical symbol for gold?",
    correctAnswer: "Au",
    category: "science",
    options: ["Ag", "Fe", "Au", "Cu"],
  },
  {
    id: 12,
    question: "Which gas do plants absorb from the atmosphere?",
    correctAnswer: "Carbon dioxide",
    category: "science",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  },
  {
    id: 13,
    question: "What is the powerhouse of the cell?",
    correctAnswer: "Mitochondria",
    category: "science",
    options: ["Nucleus", "Mitochondria", "Endoplasmic reticulum", "Ribosome"],
  },
  {
    id: 14,
    question: "What is the chemical formula for water?",
    correctAnswer: "H2O",
    category: "science",
    options: ["CO2", "H2O", "O2", "NaCl"],
  },
  {
    id: 15,
    question: "Which planet is known as the Red Planet?",
    correctAnswer: "Mars",
    category: "science",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
  },
  {
    id: 16,
    question: "What is the speed of light?",
    correctAnswer: "299,792 kilometers per second",
    category: "science",
    options: [
      "150,000 kilometers per second",
      "299,792 kilometers per second",
      "500,000 kilometers per second",
      "1,000,000 kilometers per second",
    ],
  },
  {
    id: 17,
    question: "What is the chemical symbol for iron?",
    correctAnswer: "Fe",
    category: "science",
    options: ["Ag", "Fe", "Au", "Cu"],
  },
  {
    id: 18,
    question: "Which element has the atomic number 1?",
    correctAnswer: "Hydrogen",
    category: "science",
    options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
  },
  {
    id: 19,
    question: "In which year did the first moon landing occur?",
    correctAnswer: "1969",
    category: "science",
    options: ["1955", "1969", "1975", "1982"],
  },
  {
    id: 20,
    question: "What is the speed of sound in air?",
    correctAnswer: "343 meters per second",
    category: "science",
    options: [
      "150 meters per second",
      "343 meters per second",
      "500 meters per second",
      "1000 meters per second",
    ],
  },

  // Movie Questions
  {
    id: 21,
    question: "Who won the Academy Award for Best Actor in 2020?",
    correctAnswer: "Joaquin Phoenix",
    category: "movies",
    options: ["Leonardo DiCaprio", "Brad Pitt", "Joaquin Phoenix", "Tom Hanks"],
  },
  {
    id: 22,
    question: "In which movie did Heath Ledger play the Joker?",
    correctAnswer: "The Dark Knight",
    category: "movies",
    options: [
      "Inception",
      "The Dark Knight",
      "Brokeback Mountain",
      "A Knight's Tale",
    ],
  },
  {
    id: 23,
    question: "Which animated movie features a character named Simba?",
    correctAnswer: "The Lion King",
    category: "movies",
    options: ["Frozen", "Toy Story", "The Lion King", "Finding Nemo"],
  },
  {
    id: 24,
    question: "Who directed the movie 'Avatar'?",
    correctAnswer: "James Cameron",
    category: "movies",
    options: [
      "Christopher Nolan",
      "Steven Spielberg",
      "James Cameron",
      "Peter Jackson",
    ],
  },
  {
    id: 25,
    question: "Which film won the Best Picture Oscar in 2019?",
    correctAnswer: "Green Book",
    category: "movies",
    options: ["La La Land", "The Shape of Water", "Green Book", "Parasite"],
  },
  {
    id: 26,
    question: "Who played Jack Dawson in the movie 'Titanic'?",
    correctAnswer: "Leonardo DiCaprio",
    category: "movies",
    options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"],
  },
  {
    id: 27,
    question: "Which movie features a character named Harry Potter?",
    correctAnswer: "Harry Potter and the Philosopher's Stone",
    category: "movies",
    options: [
      "The Lord of the Rings",
      "Star Wars: A New Hope",
      "Harry Potter and the Philosopher's Stone",
      "The Matrix",
    ],
  },
  {
    id: 28,
    question: "Who directed the movie 'The Shawshank Redemption'?",
    correctAnswer: "Frank Darabont",
    category: "movies",
    options: [
      "Quentin Tarantino",
      "Christopher Nolan",
      "Frank Darabont",
      "Steven Spielberg",
    ],
  },
  {
    id: 29,
    question: "Which actor starred as Neo in 'The Matrix'?",
    correctAnswer: "Keanu Reeves",
    category: "movies",
    options: ["Tom Cruise", "Keanu Reeves", "Will Smith", "Johnny Depp"],
  },
  {
    id: 30,
    question:
      "In the movie 'Inglourious Basterds,' who played Lieutenant Aldo Raine?",
    correctAnswer: "Brad Pitt",
    category: "movies",
    options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Matt Damon"],
  },

  // Programming Questions
  {
    id: 31,
    question: "What does HTML stand for?",
    correctAnswer: "Hypertext Markup Language",
    category: "programming",
    options: [
      "Hyperlink and Text Markup Language",
      "Hypertext Markup Language",
      "High-Level Text Markup Language",
      "Home Tool Markup Language",
    ],
  },
  {
    id: 32,
    question:
      "Which programming language is known as the 'mother of all languages'?",
    correctAnswer: "C",
    category: "programming",
    options: ["Java", "C++", "C#", "C"],
  },
  {
    id: 33,
    question: "What is the purpose of the 'git' version control system?",
    correctAnswer: "Managing source code versions and collaboration",
    category: "programming",
    options: [
      "Running server-side JavaScript",
      "Creating responsive web designs",
      "Managing source code versions and collaboration",
      "Database management",
    ],
  },
  {
    id: 34,
    question:
      "What is the main advantage of using a framework in software development?",
    correctAnswer: "Faster development and code consistency",
    category: "programming",
    options: [
      "Easier debugging",
      "Faster development and code consistency",
      "Higher security",
      "Improved user interface",
    ],
  },
  {
    id: 35,
    question: "What does API stand for?",
    correctAnswer: "Application Programming Interface",
    category: "programming",
    options: [
      "Advanced Programming Interface",
      "Application Programming Interface",
      "Automated Programming Interface",
      "Application Process Integration",
    ],
  },
  {
    id: 36,
    question:
      "Which programming language is commonly used for machine learning?",
    correctAnswer: "Python",
    category: "programming",
    options: ["Java", "C++", "Python", "Ruby"],
  },
  {
    id: 37,
    question:
      "What is the purpose of the 'npm' package manager in JavaScript development?",
    correctAnswer: "Managing and sharing JavaScript libraries",
    category: "programming",
    options: [
      "Running server-side scripts",
      "Creating animations",
      "Managing and sharing JavaScript libraries",
      "Database management",
    ],
  },
  {
    id: 38,
    question: "In object-oriented programming, what is encapsulation?",
    correctAnswer: "Enclosing the implementation details within a class",
    category: "programming",
    options: [
      "Storing data in arrays",
      "Enclosing the implementation details within a class",
      "Creating polymorphic functions",
      "Implementing multiple inheritance",
    ],
  },
  {
    id: 39,
    question:
      "What is the purpose of the 'SQL' language in database management?",
    correctAnswer: "Querying and manipulating relational databases",
    category: "programming",
    options: [
      "Creating responsive web designs",
      "Running server-side scripts",
      "Querying and manipulating relational databases",
      "Creating animations",
    ],
  },
  {
    id: 40,
    question:
      "What is the output of the 'console.log(2 + '2')' statement in JavaScript?",
    correctAnswer: "22",
    category: "programming",
    options: ["4", "22", "Error", "Undefined"],
  },
];
