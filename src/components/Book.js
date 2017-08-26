import React, {Component} from "react";
import {PropTypes} from "prop-types";

class Book extends Component {
    static propTypes = {
        imageLinks: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        shelf: PropTypes.string.isRequired,
        onMoveToShelf: PropTypes.func.isRequired
    };

    moveToShelf = (event) => {
        this.props.onMoveToShelf(event.target.value);
    };

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${this.props.imageLinks.thumbnail}")`
                            }}></div>
                        <div className="book-shelf-changer">
                            <select
                                onChange={this.moveToShelf}
                                value={this.props.shelf}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    {this.props.authors && this.props.authors.map((author, index) => (
                        <div
                            key={index}
                            className="book-authors">
                            {author}
                        </div>
                    ))}

                </div>
            </li>
        )
    }
}

export default Book