import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BooksProvider } from "../contexts/BooksContext";
import SortingActions from "../components/Sorting/SortingActions";

beforeEach(() => {
  render(
    <BrowserRouter>
      <BooksProvider>
        <SortingActions />
      </BooksProvider>
    </BrowserRouter>
  );
});

test("If Select element renders with all options", () => {
  //Ensuring select element renders with all the options
  expect(screen.getByTitle(/sorting options/i)).toBeInTheDocument();
  expect(screen.getByTitle(/sort by title/i)).toBeInTheDocument();
  expect(screen.getByTitle(/sort by date/i)).toBeInTheDocument();
  expect(screen.getByTitle(/auto/i)).toBeInTheDocument();
});

test("If user to able to select options for sorting", () => {
  //Ensuring by default sort by auto is selected
  expect(screen.getByTitle(/auto/i).selected).toBeTruthy();
  //Selecting sort by title and expecting it to be selected
  userEvent.selectOptions(screen.getByTitle(/sorting options/i), ["title"]);
  expect(screen.getByTitle(/sort by title/i).selected).toBeTruthy();
  //Selecting sort by date and expecting it to be selected
  userEvent.selectOptions(screen.getByTitle(/sorting options/i), [
    "publication-date",
  ]);
  expect(screen.getByTitle(/sort by date/i).selected).toBeTruthy();
});
