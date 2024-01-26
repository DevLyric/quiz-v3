import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-20 flex items-center border-b">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="text-xl font-semibold">
          Quiz
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/leaderboard" className="font-medium tracking-wider">
            Leaderboard
          </Link>
          <Link to="/signIn" className="font-medium tracking-wider">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
