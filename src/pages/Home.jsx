import { useState } from 'react';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import bookData from '../assets/books.json';  // JSON data

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = bookData.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Virtual Book Library</h1>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default Home;
