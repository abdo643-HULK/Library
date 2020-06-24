import React, { Component } from "react";
import BookShelf from "./bookshelf";
import { Link } from "react-router-dom";
import { getAll } from "./BooksAPI";

class BookList extends Component {
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
	};

	componentDidMount() {
		getAll()
			.then(books => {
				const cr = books.filter(element => element.shelf === "currentlyReading");
				const wto = books.filter(element => element.shelf === "wantToRead");
				const read = books.filter(element => element.shelf === "read");
				return [cr, wto, read];
			})
			.then(([cr, wto, read]) => {
				this.setState(() => ({
					currentlyReading: cr,
					wantToRead: wto,
					read: read
				}));
			});
	}

	shelfChange(e, shelf) {
		this.setState(prev => ({
			[shelf]: prev[shelf] + shelf
		}));
	}

	render() {
		const { currentlyReading, wantToRead, read } = this.state;
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf title={"Currently Reading"} books={currentlyReading} />
						<BookShelf title={"Want to Read"} books={wantToRead} />
						<BookShelf title={"Read"} books={read} />
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">
						<button>Add a book</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default BookList;
