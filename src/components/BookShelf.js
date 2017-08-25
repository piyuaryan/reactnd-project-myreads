import React, {Component} from "react";
import {PropTypes} from "prop-types";
import Book from "./Book";

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array
    };

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books && this.props.books.map((book, index) => (

                            <Book key={index}
                                  title={book.title}
                                  author={book.authors}
                                  imageLinks={book.imageLinks}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf