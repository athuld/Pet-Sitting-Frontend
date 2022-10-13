import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUserDetails from "./pages/AddUserDetails";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPetDetails from "./pages/AdminPetDetails";
import AdminRequestDetails from "./pages/AdminRequestDetails";
import AdminRevenueDetails from "./pages/AdminRevenueDetails";
import AdminSitterDetails from "./pages/AdminSitterDetails";
import AdminTransactionDetails from "./pages/AdminTransactionDetails";
import AdminUserDetails from "./pages/AdminUserDetails";
import Checkout from "./pages/Checkout";
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
        <Route path="/user/request/checkout" element={<Checkout/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />}/>
        <Route path="/admin/users" element={<AdminUserDetails/>}/>
        <Route path="/admin/sitters" element={<AdminSitterDetails/>}/>
        <Route path="/admin/requests" element={<AdminRequestDetails/>}/>
        <Route path="/admin/pets" element={<AdminPetDetails/>}/>
        <Route path="/admin/transactions" element={<AdminTransactionDetails/>}/>
        <Route path="/admin/revenue" element={<AdminRevenueDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
