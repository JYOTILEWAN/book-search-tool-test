import { useReducer, useContext, createContext, useCallback } from "react";
import {
  HANDLE_SEARCH_TERM,
  SAVE_BOOKS_DATA_IN_STATE,
  SORT_BOOKS,
  UPDATE_BOOKS_API_RESPONSE_STATUS,
} from "../actions/books-actions";
import BooksReducer from "../reducers/BooksReducer";
import { axiosRequests } from "../services/axios";

const BooksContext = createContext();

const initialState = {
  apiRequestStatus: null,
  books: [],
  sortMode: "auto",
  sortedBooks: [],
  searchTerm: "",
};

export const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  const handleSearchTerm = (e) => {
    const { name, value } = e.target;
    dispatch({ type: HANDLE_SEARCH_TERM, payload: { name, value } });
  };
  const searchInBooks = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        dispatch({
          type: UPDATE_BOOKS_API_RESPONSE_STATUS,
          payload: "loading",
        });
        const response = await axiosRequests.get(
          `https://openlibrary.org/search.json?q=${state.searchTerm}`
        );
        if (response?.status === 200 && response?.data) {
          dispatch({
            type: SAVE_BOOKS_DATA_IN_STATE,
            payload: response?.data?.docs,
          });
        }
        dispatch({
          type: UPDATE_BOOKS_API_RESPONSE_STATUS,
          payload: "fulfilled",
        });
      } catch (error) {
        dispatch({
          type: UPDATE_BOOKS_API_RESPONSE_STATUS,
          payload: "failed",
        });
      }
    },
    [state.searchTerm]
  );

  const sortBooks = (e) => {
    const { value } = e.target;
    dispatch({ type: SORT_BOOKS, payload: { value } });
  };

  return (
    <BooksContext.Provider
      value={{ ...state, handleSearchTerm, searchInBooks, sortBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => useContext(BooksContext);
