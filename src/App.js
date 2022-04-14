import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Booking from "./Pages/CycleDetails/Booking/Booking";
import CycleDetals from "./Pages/CycleDetails/CycleDetails/CycleDetails";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MainDashboard from "./Pages/Dashboard/MainDashboard/MainDashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Review from "./Pages/Dashboard/Review/Review";
import About from "./Pages/Home/About/About";
import Contact from "./Pages/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Products from "./Pages/Services/Products/Products";
import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <AuthProvider>

    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/home" element={<Home/>}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
      <Route path="/booking/:id" element={<PrivateRoute>
         <Booking/>
      </PrivateRoute>} />
      <Route path="/details/:id" element={<PrivateRoute>
        <CycleDetals/>
      </PrivateRoute>} />

      <Route path="/dashboard" element={<PrivateRoute>
        <MainDashboard/>
      </PrivateRoute>}>

      <Route exact path='/dashboard' element={<DashboardHome></DashboardHome>}>
          
        </Route>
        <Route path={`/dashboard/myOrders`} element={<MyOrders></MyOrders>}>
          
        </Route>
        <Route path={`/dashboard/payment`} element={<Payment></Payment>}>
          
        </Route>
        <Route path={`/dashboard/review`} element={<Review></Review>}>
          
        </Route>
        <Route path="/dashboard/makeAdmin" element={<AdminRoute>
            <MakeAdmin></MakeAdmin>
       </AdminRoute>} />
        <Route path="/dashboard/makeAdmin" element={<AdminRoute>
            <MakeAdmin></MakeAdmin>
       </AdminRoute>} />
        <Route path="/dashboard/manageProducts" element={<AdminRoute>
            <ManageProducts></ManageProducts>
       </AdminRoute>} />
      </Route>

      <Route path="/contact" element={<Contact/>}>
      </Route>
      <Route path="/products" element={<Products/>}>
      </Route>
      <Route path="/login" element={<Login/>}>
      </Route>
      <Route path="/register" element={<Register/>}>
      </Route>
    </Routes>

      </AuthProvider>
      
  </BrowserRouter>
    </div>
  );
}

export default App;
