import React, {Component} from "react";
import "./App.css";
import {Link, Route} from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";
import NotificationSystem from "react-notification-system";

class BooksApp extends Component {

    state = {
        books: []
    };

    notifier = null;

    shelves = {
        currentlyReading: "Currently Reading",
        wantToRead: "Want to Read",
        read: "Read"
    };

    componentDidMount() {
        this.fetchAllBooks();
        this.notifier = this.refs.notification;
    }

    fetchAllBooks = () => {
        BooksAPI.getAll().then((books) => this.setState({books}))
    };

    addNotification = (title, message, level) => {
        this.notifier.addNotification({
            title: title,
            message: message,
            level: level,
            position: "tc"
        });
    };

    moveToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.addNotification("Wohoo!", `Book moved to ${this.shelves[shelf]}`, "success");
            this.fetchAllBooks();
        })
    };

    render() {
        return (
            <div className="app">
                <NotificationSystem ref="notification"/>

                <Route path="/search" render={({history}) => (
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
                                to="/search">
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
