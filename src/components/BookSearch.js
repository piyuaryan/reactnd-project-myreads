import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";

class BookSearch extends Component {
    static propTypes = {
        onMoveToShelf: PropTypes.func.isRequired
    };

    state = {
        searchTerm: "",
        newBooks: []
    };

    changeSearchTerm = (e) => {
        const searchTerm = e.target.value;
        this.setState({searchTerm: searchTerm});
        this.searchBook(searchTerm);
    };

    searchBook = (searchTerm) => {
        console.log("Fire Search: " + searchTerm);
        if (searchTerm && searchTerm.trim() !== '') {
            BooksAPI.search(searchTerm, 10).then((books) => {
                if (books !== undefined) {
                    this.setState({newBooks: books})
                }
            })
        }
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
                        <input type="text" value={this.state.searchTerm} onChange={this.changeSearchTerm} placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.newBooks.length > 0 && this.state.newBooks.map((book, index) => (

                            <Book
                                key={index}
                                title={book.title}
                                authors={book.authors}
                                imageLinks={book.imageLinks}
                                shelf="none"
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

export default BookSearch