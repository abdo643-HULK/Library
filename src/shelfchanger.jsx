import React from "react";

export default function ShelfChanger({ changeShelf, shelf }) {
	return (
		<div className="book-shelf-changer">
			<select value={shelf} onChange={e => changeShelf(e)}>
				<option value="move" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
}
