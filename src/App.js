import React, {Component} from "react";
import "./App.css";
import {Link, Route} from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";

class BooksApp extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        this.fetchAllBooks()
    }

    fetchAllBooks = () => {
        BooksAPI.getAll().then((books) => this.setState({books}))
    };

    moveToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.fetchAllBooks();
        })
    };

    render() {
        return (
            <div className="app">

                <Route path="/create" render={({history}) => (
                    <BookSearch
                        onMoveToShelf={(book, shelf) => {
                            this.moveToShelf(book, shelf);
                        }}/>
                )}/>

                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>

                        <BookList
                            books={this.state.books}
                            onMoveToShelf={(book, shelf) => {
                                this.moveToShelf(book, shelf);
                            }}/>

                        <div className="open-search">
                            <Link
                                to="/create">
                                Add a book
                            </Link>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
