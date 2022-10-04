import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUserDetails from "./pages/AddUserDetails";
import FindSitter from "./pages/FindSitter";
import FindWalker from "./pages/FindWalker";
import Login from "./pages/Login";
import PopularSitters from "./pages/PopularSitters";
import Register from "./pages/Register";
import UserDashBoard from "./pages/UserDashBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/add_details" element={<AddUserDetails/>} />
        <Route path="/user/dashboard" element={<UserDashBoard/>} />
        <Route path="/user/find/sitter" element={<FindSitter/>} />
        <Route path="/user/find/walker" element={<FindWalker/>} />
        <Route path="/user/find/sitter/popular" element={<PopularSitters/>}/>
      </Routes>
    </Router>
  );
}

export default App;
