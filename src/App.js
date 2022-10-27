
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Blog from './Pages/Blog/Blog';
import Course from './Pages/Course/Course';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import SignIn from './Pages/SignIn/SignIn';
// import PrivateRoute from './routes/PrivateRoute/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/', 
          element: <Home></Home>
        },
        {
          path: '/courses',
          element:  <Courses></Courses>
        },
        {
          path: '/course/:id',
          element: <Course></Course>,
          loader: ({params}) => {
            fetch(`http://localhost:5000/courses/${params.id}`)
          }
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {path: '/blog',
         element: <Blog></Blog>
      },
      {
        path: '*', 
        element: <div><h1>ei name kono router nai</h1></div>
      }
     ]
    }
  ])

  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
