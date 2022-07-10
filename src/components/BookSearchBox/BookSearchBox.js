import { useBooksContext } from "../../contexts/BooksContext";
import "./BookSearchBox.css";
const BookSearchBox = () => {
  const { handleSearchTerm, searchTerm, searchInBooks } = useBooksContext();
  return (
    <form onSubmit={searchInBooks} className="search-form" title="book search form">
      <input
        className="book-search-box"
        type="textbox"
        placeholder="Search by title, author name or subject name"
        results="5"
        aria-label="book search field"
        name="searchTerm"
        value={searchTerm}
        onChange={handleSearchTerm}
      />
      <button
        className="search-button"
        type="submit"
        aria-label="search button"
      >
        Search
      </button>
    </form>
  );
};

export default BookSearchBox;
