import { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

function MyLibrary() {
  const { library, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div className="container">
      <h1>My Library</h1>
      {library.length === 0 ? (
        <p>Your library is empty.</p>
      ) : (
        <div className="book-list">
          {library.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Rating: {book.rating}</p>
              <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyLibrary;
