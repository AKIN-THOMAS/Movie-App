import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetails from "./components/dashboard/MovieDetails";
import Layout from "./components/dashboard/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="" element={<Layout />}>
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
