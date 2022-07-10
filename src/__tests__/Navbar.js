import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";

test("If navbar renders", () => {
    render(<Navbar/>)
    //Expecting navbar component to be in the dom
    expect(screen.getByTitle(/navbar/i)).toBeInTheDocument()
})