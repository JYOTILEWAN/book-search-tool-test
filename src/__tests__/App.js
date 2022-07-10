import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { BooksProvider } from "../contexts/BooksContext";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <BooksProvider>
        <App />
      </BooksProvider>
    </BrowserRouter>
  );
});

test("Search functionality", async () => {
  //Typing in the search box
  await userEvent.type(
    screen.getByPlaceholderText(
      /search by title, author name or subject name/i
    ),
    "Physics"
  );
  //Clicking on search button
  await userEvent.click(screen.getByRole("button", { name: /search/i }));

  //Expecting title of all search results includes physics
  await expect(screen.findAllByRole("heading", { name: /physics/i }).l);
});

test("Search functionality", async () => {
  //Typing in the search box
  await userEvent.type(
    screen.getByPlaceholderText(
      /search by title, author name or subject name/i
    ),
    "Science"
  );
  //Clicking on search button
  await userEvent.click(screen.getByRole("button", { name: /search/i }));

  //Expecting title of all search results includes physics
  await expect(screen.findAllByRole("heading", { name: /science/i }).l);
});

