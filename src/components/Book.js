import React, {Component} from "react";
import {PropTypes} from "prop-types";

class Book extends Component {
    static propTypes = {
        imageURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.array
    };

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${this.props.imageURL}")`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    {this.props.author.map((author, index) => (
                        <div key={index}
                             className="book-authors">
                            {author}</div>
                    ))}

                </div>
            </li>
        )
    }
}

export default Book