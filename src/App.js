import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/SharePages/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>

      </Routes>


    </div>
  );
}

export default App;
