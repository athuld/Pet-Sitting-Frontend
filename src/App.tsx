import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUserDetails from "./pages/AddUserDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/add_details" element={<AddUserDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
