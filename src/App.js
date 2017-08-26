import React, {Component} from "react";
import "./App.css";
import {Link, Route} from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";
import {Alert, Button} from "react-bootstrap";

class BooksApp extends Component {

    state = {
        books: [],
        alertVisible: false,
        alertText: ''
    };

    shelves = {
        currentlyReading: "Currently Reading",
        wantToRead: "Want to Read",
        read: "Read"
    };

    componentDidMount() {
        this.fetchAllBooks()
    }

    fetchAllBooks = () => {
        BooksAPI.getAll().then((books) => this.setState({books}))
    };

    moveToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.setState({
                alertText: `Book moved to ${this.shelves[shelf]}`
            });
            this.handleAlertShow();
            this.fetchAllBooks();
        })
    };

    handleAlertDismiss = () => {
        this.setState({alertVisible: false});
    };

    handleAlertShow = () => {
        this.setState({alertVisible: true});
    };

    render() {
        return (
            <div className="app">
                {this.state.alertVisible ? (
                    <Alert bsStyle="success" closeLabel="close">
                        <span>{this.state.alertText}   </span>
                        <Button bsStyle="link" onClick={this.handleAlertDismiss}>&times;</Button>
                    </Alert>) : ""}

                <Route path="/create" render={({history}) => (
                    <BookSearch
                        myBooks={this.state.books}
                        onMoveToShelf={(book, shelf) => {
                            this.moveToShelf(book, shelf);
                            history.push("/");
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
