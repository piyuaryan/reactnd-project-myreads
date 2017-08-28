import React from "react";
import {PropTypes} from "prop-types";
import Book from "./Book";

const BookShelf = ({title, books, onMoveToShelf}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books && books.map((book, index) => (

                        <Book
                            key={index}
                            title={book.title}
                            authors={book.authors}
                            imageLinks={book.imageLinks}
                            shelf={book.shelf}
                            onMoveToShelf={(shelf) => {
                                onMoveToShelf(book, shelf)
                            }}/>
                    ))}
                </ol>
            </div>
        </div>
    )
};

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array,
    onMoveToShelf: PropTypes.func.isRequired
};

export default BookShelf