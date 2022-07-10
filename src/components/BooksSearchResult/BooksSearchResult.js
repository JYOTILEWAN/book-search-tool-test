import { lazy } from "react";
import { useBooksContext } from "../../contexts/BooksContext";
import SortingActions from "../Sorting/SortingActions";
import "./BooksSearchResult.css";
const Book = lazy(() => import("../Book/Book"));

const BooksSearchResult = () => {
  const { sortedBooks } = useBooksContext();
  return (
    <>
      <SortingActions />
      <section className="book-list">
        {sortedBooks.map((item) => {
          const bookProps = {
            title: item?.title,
            author: item?.author_name,
            publishedIn: item?.publish_date,
            lccn: item?.lccn,
          };
          return <Book key={item.key} {...bookProps} />;
        })}
      </section>
    </>
  );
};

export default BooksSearchResult;
