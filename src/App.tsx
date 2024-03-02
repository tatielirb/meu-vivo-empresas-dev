import Header from "components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompaniesHome from "pages/companies/CompaniesHome";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" Component={CompaniesHome} />
        </Routes>
      </Router>
    </div>
  );
}
