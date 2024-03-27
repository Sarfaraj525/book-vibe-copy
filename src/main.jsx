import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PagesToRead from './components/PagesToRead/PagesToRead';
import MainLayout from './layouts/MainLayout';
import BookDetails from './Pages/BookDetails/BookDetails';
import Contact from './components/contact/Contact';
import About from './components/About/About';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Root></Root>,
    
  //   children: [
      {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: '/',
            element: <Home></Home>
        
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`/data.json?id=${params.id}`)
      },
        
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
