import React from "react";
import Book from "./book";

export default function SearchResults({ books = [] }) {
	return (
		<ol className="books-grid">
			{books.map(book => {
				return (
					<li key={book.id}>
						<Book book={book} />
					</li>
				);
			})}
		</ol>
	);
}
