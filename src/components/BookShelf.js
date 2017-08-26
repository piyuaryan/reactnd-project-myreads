import React, {Component} from "react";
import {PropTypes} from "prop-types";
import Book from "./Book";

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array,
        onMoveToShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books && this.props.books.map((book, index) => (

                            <Book
                                key={index}
                                title={book.title}
                                authors={book.authors}
                                imageLinks={book.imageLinks}
                                shelf={book.shelf}
                                onMoveToShelf={(shelf) => {
                                    this.props.onMoveToShelf(book, shelf)
                                }}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf