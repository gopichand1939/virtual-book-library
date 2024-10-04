import { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);

  // Add a book to the library (ensure no duplicates)
  const addToLibrary = (book) => {
    setLibrary((prevLibrary) => {
      // If the book is already in the library, return the same array
      if (prevLibrary.some((libBook) => libBook.id === book.id)) {
        return prevLibrary;
      }
      return [...prevLibrary, book];
    });
  };

  // Remove a book from the library by its ID
  const removeFromLibrary = (id) => {
    setLibrary((prevLibrary) => prevLibrary.filter((book) => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
