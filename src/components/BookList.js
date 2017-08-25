import React, {Component} from "react";
import {PropTypes} from "prop-types";
import BookShelf from "./BookShelf";

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    shelves = [
        {
            name: `currentlyReading`,
            heading: `Currently Reading`
        },
        {
            name: `wantToRead`,
            heading: `Want to Read`
        },
        {
            name: `read`,
            heading: `Read`
        },
    ];

    render() {
        return (
            <div className="list-books-content">
                <div>
                    {this.shelves.map((shelf, index) => (
                        <BookShelf key={index} title={shelf.heading} books={this.props.books && this.props.books.filter((book) => book.shelf === shelf.name)}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default BookList