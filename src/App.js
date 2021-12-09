import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Genre from "./views/Genre";
import ListMovie from "./views/ListMovie";
import MovieDetail from "./views/MovieDetail";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="wrapper">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Genre />} />
          <Route path="/listmovie" element={<ListMovie />} />
          <Route path="/detailmovie/:movieid" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
