import { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { library } = useContext(LibraryContext);

  return (
    <div>
      {/* Display number of books in the library */}
      <Link to="/my-library">
        <button>My Library ({library.length})</button>
      </Link>
    </div>
  );
}

export default Cart;
