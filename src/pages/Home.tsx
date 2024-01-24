export default function Home() {
  return (
    <div className="mt-32">
      <div className="container mx-auto max-w-lg flex flex-col items-center px-6">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to the Quiz Experience
        </h1>
        <p className="text-center text-gray-600">
          Embark on a journey of knowledge and fun! Register now to leave your
          mark on the leaderboard.
        </p>

        <button className="mt-8 rounded py-2 px-6 bg-zinc-950 text-white hover:scale-105 transition-all">
          Start Playing
        </button>
      </div>
    </div>
  );
}
