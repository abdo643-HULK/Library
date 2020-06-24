import React, { Component } from "react";
import { search } from "./BooksAPI";
import SearchResults from "./searchresults";
import SearchBar from "./searchbar";

class SearchPage extends Component {
	state = {
		query: "",
		loading: false,
		books: []
	};

	handleChange = e => {
		e.persist();
		const query = e.target.value;
		this.setState(
			() => ({
				query,
				loading: true
			}),
			() =>
				query.length > 0
					? this.getQuery(query)
					: this.setState(() => ({
							books: [],
							loading: false
					  }))
		);
	};

	wait = async ms => {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	};

	getQuery = async query => {
		await this.wait(500);
		const books = await search(query);
		this.setState(() => ({
			books: books,
			loading: false
		}));
	};

	render() {
		const { books = [], loading = false, query = "" } = this.state;
		return (
			<div className="search-books">
				<SearchBar handleChange={this.handleChange} />
				<div className="search-books-results">
					{loading ? <h1>Loading...</h1> : books.length && query.length ? <SearchResults books={books} /> : <h1>No books found</h1>}
				</div>
			</div>
		);
	}
}

export default SearchPage;

/*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/
