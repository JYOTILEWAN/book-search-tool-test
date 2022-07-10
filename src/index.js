import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BooksProvider } from "./contexts/BooksContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BooksProvider>
      <App />
    </BooksProvider>
  </BrowserRouter>
);


