import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';
import BookDetails from './pages/BookDetails';
import { LibraryProvider } from './context/LibraryContext';
import Cart from './components/Cart';  // Import Cart component

function App() {
  return (
    <LibraryProvider>
      <Router>
        <header>
          <h1>Virtual Book Library</h1>
          <Cart /> {/* Add Cart to show added books */}
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/my-library" element={<MyLibrary />} />
        </Routes>
      </Router>
    </LibraryProvider>
  );
}

export default App;
