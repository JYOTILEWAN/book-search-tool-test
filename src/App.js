import { Routes, Route, Navigate } from "react-router-dom";
import Books from "./pages/Books";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/books/search" />} />
      <Route path="/books/search" element={<Books/>} />
    </Routes>
  );
}

export default App;
