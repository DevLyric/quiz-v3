import { Link } from "react-router-dom";

export default function QuestionTypeSelection() {
  return (
    <div className="mt-32">
      <div className="container mx-auto max-w-xl px-6">
        <h1 className="text-2xl text-center font-semibold mb-4">
          Choose Question Type
        </h1>
        <p className="text-center text-gray-600">
          Select the type of questions you want to receive and let the quiz
          begin!
        </p>

        <div className="flex flex-col justify-center text-cener md:flex-row md:flex-wrap gap-4 mt-8">
          <Link
            to="/questions/general"
            className="rounded-full py-3 px-8 bg-blue-500 text-white hover:scale-105 transition-all"
          >
            General Knowledge
          </Link>
          <Link
            to="/questions/science"
            className="rounded-full py-3 px-8 bg-green-500 text-white hover:scale-105 transition-all"
          >
            Science
          </Link>
          <Link
            to="/questions/movies"
            className="rounded-full py-3 px-8 bg-yellow-500 text-white hover:scale-105 transition-all"
          >
            Movies
          </Link>
          <Link
            to="/questions/programming"
            className="rounded-full py-3 px-8 bg-purple-500 text-white hover:scale-105 transition-all"
          >
            Programming
          </Link>
        </div>
      </div>
    </div>
  );
}
