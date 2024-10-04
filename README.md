# React + Vite
# Virtual Book Library

Virtual Book Library React.js
Assignment

Objective:
Create a virtual book library using React.js, allowing users to browse books, view detailed
information about each book, and manage their personal library. The assignment is
designed to test your understanding of React, component structure, state management,
routing, and good coding practices.

Assignment Requirements:
Pages:
1. Home Page (Book Listing):
 - Display a list of books with details such as title, author, genre, and rating.
 - The books should be displayed in a grid or list format with a search functionality to
filter books by title, author, or genre.
2. Book Details Page:
 - When a book is clicked from the Home page, navigate to a detailed view page.
 - Display detailed information about the selected book including title, author, genre,
rating, description, and publication year.
 - Provide an option to add the book to the "My Library" collection.
3. My Library Page:
 - A separate page that shows the list of books the user has added to their personal
library.
 - Users should be able to remove books from this collection.
Features to Implement:
 - Routing: Implement navigation between pages using `react-router-dom` or any routing
solution.
 - State Management: Use React's state management (`useState`, `useContext`, or any
preferred state management solution) to handle the list of books, selected books, and
the user's personal library.
 - Reusable Components: Create reusable components such as BookCard, BookList, and
SearchBar.

 - Prop Drilling/Context API: Ensure data is passed between components effectively,
avoiding unnecessary prop drilling by using `Context API` or other state management
techniques.
 - Form Handling: Simple form for searching books.
 - Good Practices:
 - Component decomposition
 - Folder structure (e.g., `components`, `pages`, `services`)
 - Use functional components and hooks
 - Follow DRY and clean code principles
JSON Data:
Below is the JSON data the candidate should use to populate the book library:

{
"books": [
{
"id": 1,
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"genre": "Classic",
"rating": 4.7,
"description": "A novel set in the Jazz Age that explores themes of wealth, love, and the
American Dream.",
"publication_year": 1925
},
{
"id": 2,
"title": "To Kill a Mockingbird",
"author": "Harper Lee",
"genre": "Fiction",
"rating": 4.8,
"description": "A timeless novel of a child's moral awakening and a poignant tale of race
and justice in the American South.",
"publication_year": 1960
},
{
"id": 3,
"title": "1984",
"author": "George Orwell",
"genre": "Dystopian",
"rating": 4.6,
"description": "A dystopian social science fiction novel and cautionary tale about the

dangers of totalitarianism.",
"publication_year": 1949
},
{
"id": 4,
"title": "Pride and Prejudice",
"author": "Jane Austen",
"genre": "Romance",
"rating": 4.9,
"description": "A romantic novel that also serves as a social commentary on the British
landed gentry of the early 19th century.",
"publication_year": 1813
},
{
"id": 5,
"title": "The Catcher in the Rye",
"author": "J.D. Salinger",
"genre": "Fiction",
"rating": 4.3,
"description": "A story about a young boy’s journey through the challenges of
adolescence.",
"publication_year": 1951
}
]
}

Expected Deliverables:
 - A GitHub repository containing the code for the project.
 - A `README.md` file explaining the structure of the project and how to run it.
 - The project should be fully functional with no errors or warnings in the console.
Evaluation Criteria:
 - Code Quality: Clean, maintainable, and well-structured code.
 - Use of React Best Practices: Proper use of state, props, hooks, and reusable
components.
 - UI/UX: Simple, intuitive, and responsive design.
 - Functionality: All specified features should work as expected.
 - Error Handling: Graceful handling of any potential errors (e.g., empty book list, failed
search).







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