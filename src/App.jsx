import './App.css'
import Footer from './components/footer/footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import All from './screen/all';
import CategoryPage from './components/categories/categoryPage';
import NotFound from './components/404/notfound'
import Head from './components/header/head/head';
import Header from './components/header/header';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <All/>,
      errorElement: <NotFound/>
    },
    {
      // path: "categories/:categoryId",
      path: "categories",
      element: <CategoryPage/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]);
  
  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  )
}

export default App
