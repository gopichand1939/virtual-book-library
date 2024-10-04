import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="book-card">
      {book.image_url && (
        <img src={book.image_url} alt={`${book.title} cover`} className="book-image" />
      )}
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/book/${book.id}`}><button>View Details</button></Link>
    </div>
  );
}

export default BookCard;
