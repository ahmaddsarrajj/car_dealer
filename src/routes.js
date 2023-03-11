import { Navigate, useRoutes } from 'react-router-dom';
import NotFound from './components/404/notfound';
import CategoryPage from './components/categories/categoryPage';
import All from './screen/all'

export default function Router() {

    let element = useRoutes([
        {
          path: "/",
          element: <All/>,
        },
        {
            // path: "categories/:categoryId",
            path: "categories",
            element: <CategoryPage/>
          },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ]);
    
    return element;
}