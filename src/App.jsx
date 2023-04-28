import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import All from './screen/all';
import CategoryPage from './components/categories/categoryPage';
import NotFound from './components/404/notfound'
import ItemView from './screen/items/itemView';
import Login from './screen/login';
import Signup from './screen/signup';
import Component from './screen/component';
import Item from './screen/item';

function App() {
  

  return (

      <Routes>
        <Route path="/"element={<Component/>}>
          <Route path="" element={<All/>}/>
          <Route   path="category/:categoryId/:categoryName" element={<CategoryPage/>} />
          <Route path="item/:id" element={<Item/>}/>
        </Route>
        
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
  )
}

export default App
