import React from "react";
import Book from "./book";

export default function BookShelf({ title, books }) {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map(book => (
						<li key={book.id}>
							<Book book={book} shelfChange={() => window.location.reload(false)} />
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}
