import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/SharePages/Navbar';
import Home from './Pages/Home/Home';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import Tools from './Pages/ToolPage/Tools';
import Footer from './Pages/SharePages/Footer';
import Login from './Pages/LoginPage/Login';
import Registration from './Pages/LoginPage/Register';
import RequireAuth from './Pages/SharePages/RequireAuth';

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

        <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <PurchasePage></PurchasePage>
          </RequireAuth>

        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
