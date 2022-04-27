import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import ShowAdmin from './components/ShowAdmin/ShowAdmin';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
        <Route path='/admin/add' element={<AddAdmin></AddAdmin>}></Route>
        <Route path='/admin' element={<ShowAdmin></ShowAdmin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
