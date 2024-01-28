import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import QuestionTypeSelection from "./pages/QuestionTypeSelection";
import QuestionList from "./pages/QuestionList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LeaderBoard from "./pages/LeaderBoard";

export default function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/question-type-selection"
            element={<QuestionTypeSelection />}
          />
          <Route path="/questions/:type" element={<QuestionList />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </Router>
    </div>
  );
}
