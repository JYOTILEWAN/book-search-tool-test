import { render, screen } from "@testing-library/react";
import Book from "../components/Book/Book";

const bookData = {
  title: "English Grammar",
  publishedIn: ["25/03/1998"],
  author: ["Raymond Murphy"],
  lccn: ["93005405"],
};
test("If book component renders with all required items", () => {
  render(<Book {...bookData} />);

  //Expecting book title to be "English Grammar"
  expect(
    screen.getByRole("heading", { name: /english grammar/i })
  ).toBeInTheDocument();

  //Expecting cover src to be "https://covers.openlibrary.org/b/lccn/93005405-S.jpg"
  expect(screen.getByAltText(/book cover/i).src).toBe(
    "https://covers.openlibrary.org/b/lccn/93005405-S.jpg"
  );

  //Expecting author name to be "Raymond Murphy"
  expect(screen.getByTitle(/author name/i)).toHaveTextContent("Raymond Murphy");

  //Expecting publish date to be "25/03/1998"

  expect(screen.getByTitle(/publish date/i)).toHaveTextContent("25/03/1998");
});
