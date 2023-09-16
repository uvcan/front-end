import './App.css';
import Nav from './Nav';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<h1>Product list</h1>}></Route>
        <Route path='/add' element={<h1>Add product</h1>}></Route>
        <Route path='/update' element={<h1>Update Product</h1>}></Route>\
        <Route path='/logout' element={<h1>Log out</h1>}></Route>
        <Route path='/profile' element={<h1>Profile</h1>}></Route>
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
