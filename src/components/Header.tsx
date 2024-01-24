import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-20 flex items-center border-b font-semibold">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="text-xl">
          Quiz
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/leaderboard">LEADERBOARD</Link>
          <Link to="/login">SIGNUP/LOGIN</Link>
        </div>
      </div>
    </header>
  );
}
