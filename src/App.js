import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/SharePages/Navbar';
import Home from './Pages/Home/Home';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import Tools from './Pages/ToolPage/Tools';
import Footer from './Pages/SharePages/Footer';
import Login from './Pages/LoginPage/Login';
import Registration from './Pages/LoginPage/Register';
import RequireAuth from './Pages/SharePages/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import ManageUser from './Pages/Dashboard/ManageUser';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Blog from './Pages/Blog/Blog';
import RequireAdmin from './Pages/SharePages/RequireAdmin';
import OrderDetails from './Pages/PurchasePage/OrderDetails';
import Payment from './Pages/Dashboard/Payment';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='tools' element={
          <RequireAuth>
            <Tools></Tools>
          </RequireAuth>
        }></Route>

        <Route path='/tool/:toolId' element={<RequireAuth>
          <PurchasePage></PurchasePage>
        </RequireAuth>}></Route>

        <Route path='/order/:orderId' element={<RequireAuth>
          <OrderDetails></OrderDetails>
        </RequireAuth>}></Route>



        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>

          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manageuser' element={
            <RequireAdmin>
              <ManageUser></ManageUser>
            </RequireAdmin>
          }></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageorder' element={
            <RequireAdmin>
              <ManageOrder></ManageOrder>
            </RequireAdmin>
          }></Route>
          <Route path='manageproduct' element={<RequireAdmin>
            <ManageProduct></ManageProduct>
          </RequireAdmin>}></Route>
        </Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>


    </div>
  );
}

export default App;
