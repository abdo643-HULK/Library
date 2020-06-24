import React from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ handleChange }) {
	return (
		<div className="search-books-bar">
			<Link to="/">
				<button className="close-search">Close</button>
			</Link>
			<div className="search-books-input-wrapper">
				<input type="text" placeholder="Search by title or author" onChange={e => handleChange(e)} />
			</div>
		</div>
	);
}
