import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BooksProvider } from "../contexts/BooksContext";
import BookSearchBox from "../components/BookSearchBox/BookSearchBox";

beforeEach(() => {
  render(
    <BrowserRouter>
      <BooksProvider>
        <BookSearchBox />
      </BooksProvider>
    </BrowserRouter>
  );
});

test("if book search form renders", () => {
  //Expecting book search form to be in the document
  expect(screen.getByTitle(/book search form/i)).toBeInTheDocument();

  //Expecting book search input box to be present in the dom
  expect(
    screen.getByPlaceholderText(/search by title, author name or subject name/i)
  ).toBeInTheDocument();

  //Expecting search button to be in the dom
  expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
});

test("If user is able to type in the search box and click search button", () => {
  //Finding the input box
  const searchBox = screen.getByPlaceholderText(
    /search by title, author name or subject name/i
  );
  //Typing in the input box
  userEvent.type(searchBox, "Physics");

  //Expecting the value of input box now to be "Physics"
  expect(searchBox.value).toBe("Physics");

  //Ensuring that search button is clickable
  userEvent.click(screen.getByRole("button", /search/i));
});
