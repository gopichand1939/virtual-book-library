import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import bookData from '../assets/books.json';  // Import the JSON data

function BookDetails() {
  const { id } = useParams();  // Get the book ID from the URL
  const { addToLibrary, library } = useContext(LibraryContext);  // Access library context

  // Find the selected book using the ID from the URL
  const book = bookData.books.find((b) => b.id === parseInt(id));

  // Check if the book is already in the library
  const isBookInLibrary = library.some((libBook) => libBook.id === book.id);

  return (
    <div className="book-detail-container">
      <img 
        src={book.image_url}  // Add book image here
        alt={`${book.title} cover`}
        className="book-detail-image"
      />
      <div className="book-detail-info">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Rating: {book.rating}</p>
        <p>Description: {book.description}</p>
        <p>Publication Year: {book.publication_year}</p>

        {/* Add to My Library button */}
        <button 
          onClick={() => addToLibrary(book)} 
          disabled={isBookInLibrary}>
          {isBookInLibrary ? 'Already in Library' : 'Add to My Library'}
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
