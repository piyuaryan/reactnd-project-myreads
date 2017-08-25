import React, {Component} from "react";
// import * as BooksAPI from './utils/BooksAPI'
import "./App.css";
import {Link, Route} from "react-router-dom";
import BookShelf from "./components/BookShelf";

class BooksApp extends Component {

    render() {
        const book1 = {
            title: "To Kill a Mockingbird",
            authors: ["Harper Lee"],
            imageURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        };
        const book2 = {
            title: "To Kill a Mockingbird2",
            authors: ["Harper Lee2"],
            imageURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        };
        const currentlyReading = [book1, book2];
        console.log(currentlyReading);

        return (
            <div className="app">

                <Route path="/create" render={() => (
                    <div className="search-books">
                        <div className="search-books-bar">
                            {/*<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>*/}
                            <div className="search-books-input-wrapper">
                                {/*
                                 NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                 You can find these search terms here:
                                 https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                 However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                 you don't find a specific author or title. Every search is limited by search terms.
                                 */}
                                <input type="text" placeholder="Search by title or author"/>

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                )}/>

                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <BookShelf title="Currently Reading" books={currentlyReading}/>

                                <BookShelf title="Want to Read" books={currentlyReading}/>

                                <BookShelf title="Read" books={currentlyReading}/>
                            </div>
                        </div>
                        <div className="open-search">
                            <Link
                                to="/create">Add a book</Link>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
