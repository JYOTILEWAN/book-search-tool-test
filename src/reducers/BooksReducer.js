import {
  HANDLE_SEARCH_TERM,
  SAVE_BOOKS_DATA_IN_STATE,
  SORT_BOOKS,
  UPDATE_BOOKS_API_RESPONSE_STATUS,
} from "../actions/books-actions";

const BooksReducer = (state, action) => {
  if (action.type === UPDATE_BOOKS_API_RESPONSE_STATUS) {
    return { ...state, apiRequestStatus: action.payload };
  }
  if (action.type === HANDLE_SEARCH_TERM) {
    const { name, value } = action.payload;
    return { ...state, [name]: value };
  }
  if (action.type === SAVE_BOOKS_DATA_IN_STATE) {
    return {
      ...state,
      books: action.payload,
      sortedBooks: action.payload,
      sortMode: "auto",
    };
  }

  if (action.type === SORT_BOOKS) {
    const { value } = action.payload;
    let tempBooks = [...state.books];
    if (value === "title") {
      tempBooks = tempBooks.sort((x, y) => {
        let a = x?.title?.toUpperCase(),
          b = y?.title?.toUpperCase();
        return a === b ? 0 : a > b ? 1 : -1;
      });
    }

    if (value === "publication-date") {
      tempBooks = tempBooks.sort((a, b) => {
        const x = a?.publish_date ? a?.publish_date[0] : undefined;
        const y = b?.publish_date ? b?.publish_date[0] : undefined;
        return new Date(x) - new Date(y);
      });
    }
    return { ...state, sortedBooks: tempBooks, sortMode: value };
  }

  return state;
};

export default BooksReducer;
