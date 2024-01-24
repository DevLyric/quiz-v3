import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import QuestionTypeSelection from "./pages/QuestionTypeSelection";

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
        </Routes>
      </Router>
    </div>
  );
}
