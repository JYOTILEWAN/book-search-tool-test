import { lazy } from "react";
import "./Books.css";
import Navbar from "../components/Navbar/Navbar";
import BookSearchBox from "../components/BookSearchBox/BookSearchBox";
import { useBooksContext } from "../contexts/BooksContext";
import Spinner from "../components/Spinner/Spinner";
const BooksSearchResult = lazy(() =>
  import("../components/BooksSearchResult/BooksSearchResult")
);

const Books = () => {
  const { apiRequestStatus } = useBooksContext();
  return (
    <main>
      <Navbar />
      <section className="container">
        <BookSearchBox />
        {apiRequestStatus === "fulfilled" && <BooksSearchResult />}
        {apiRequestStatus === "loading" && <Spinner />}
        {apiRequestStatus === "failed" && (
          <h1 className="error-message">
            Something went wrong please try again later
          </h1>
        )}
      </section>
    </main>
  );
};

export default Books;
