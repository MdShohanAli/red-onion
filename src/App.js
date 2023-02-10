import './App.css';
import Home from './Component/Page/Home/Home';
import TopNav from './Component/Shared/TopNav';

import { Route, Routes } from 'react-router-dom';
import Login from './Component/Authentication/Login/Login';
import SignUp from './Component/Authentication/SignUp/SignUp';
import NotFound from './Component/Authentication/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}  ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}  ></Route>
      </Routes>



    </div>
  );
}

export default App;
