import { Route, Routes } from "react-router-dom";
import "./App.css";
import BooksShelf from "./pages/Books";
import NotFoundPage from "./pages/NotFound";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className="italic">hello</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books" element={<BooksShelf />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
