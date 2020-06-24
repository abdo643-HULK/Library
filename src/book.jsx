import React, { Component } from "react";
import ShelfChanger from "./shelfchanger";
import { update, get } from "./BooksAPI";

export default class Book extends Component {
	_isMounted = false;

	state = {
		shelf: "none"
	};

	componentDidMount() {
		this._isMounted = true;
		get(this.props.book.id).then(book => {
			if (this._isMounted) {
				this.setState(() => ({
					shelf: book.shelf
				}));
			}
		});
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	changeShelf = e => {
		e.preventDefault();
		const shelf = e.target.value;
		this.setState(
			() => ({ shelf: shelf }),
			() =>
				update(this.props.book, shelf).then(() => {
					if (this.props.shelfChange) {
						this.props.shelfChange();
					}
				})
		);
	};

	render() {
		const { title = "", authors = [], imageLinks = {} } = this.props.book;
		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${imageLinks.smallThumbnail || ""})`
						}}
					/>
					<ShelfChanger shelf={this.state.shelf} changeShelf={this.changeShelf} />
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">
					{authors.map(author => (
						<p key={author}>
							{author}
							<br />
						</p>
					))}
				</div>
			</div>
		);
	}
}
