import { useBooksContext } from "../../contexts/BooksContext";
import "./SortingActions.css";

const SortingActions = () => {
  const { sortBooks, sortMode } = useBooksContext();
  console.log(sortMode)
  return (
    <section className="sorting-button-container">
      <span>Sort Mode :</span>
      <select
        name="sortMode"
        className="selectOptions"
        title="Sorting Options"
        value={sortMode}
        onChange={sortBooks}
      >
        <option value="auto" title="auto">
          Auto
        </option>
        <option value="title" title="Sort By title">
          Sort by title
        </option>
        <option value="publication-date" title="Sort By date">
          Sort by date
        </option>
      </select>
    </section>
  );
};

export default SortingActions;
