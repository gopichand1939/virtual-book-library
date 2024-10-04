# React + Vite
# Virtual Book Library

This is a **Virtual Book Library** built using **React.js**. It allows users to browse books, view detailed information about each book, and manage their personal library by adding or removing books.

## Features
- **Book Listing**: Browse a list of books with details such as title, author, genre, and rating.
- **Book Details**: View detailed information about each book, including cover image, title, author, genre, rating, description, and publication year.
- **Search**: Filter books by title, author, or genre using a search bar.
- **My Library**: Add books to a personal library and remove them as needed.
- **Responsive Design**: Works across various device sizes.

## Project Structure

```bash
virtual-book-library/
│
├── node_modules/               # Installed dependencies
├── public/                     # Public files such as index.html
│   └── index.html
├── src/                        # Main source folder
│   ├── assets/                 # Static assets and book data
│   │   └── books.json          # JSON data containing the book list
│   ├── components/             # Reusable components
│   │   ├── BookCard.jsx        # Book card component
│   │   ├── BookList.jsx        # List of books component
│   │   ├── SearchBar.jsx       # Search bar component
│   │   └── Cart.jsx            # Cart component for My Library
│   ├── context/                # Context API for managing global state
│   │   └── LibraryContext.jsx
│   ├── pages/                  # Pages for routing
│   │   ├── Home.jsx            # Home page displaying all books
│   │   ├── MyLibrary.jsx       # My Library page displaying added books
│   │   └── BookDetails.jsx     # Page for viewing book details
│   ├── App.jsx                 # Main app component handling routing
│   └── index.jsx               # React entry point
├── package.json                # Project dependencies and scripts
└── README.md                   # Documentation for the project


Installation
To run this project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/gopichand1939/virtual-book-library.git
cd virtual-book-library


2.Install the dependencies: Run the following command to install the dependencies:

npm install

3.Run the project: To start the development server:

npm run dev

Technologies Used
React.js: JavaScript framework for building the user interface.
Vite: Development build tool.
CSS: Styling for the UI.
React Router: For handling navigation between pages.
Context API: For state management to store the user’s personal library.