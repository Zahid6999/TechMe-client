
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';


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
          path: '/signin',
          element: <SignIn></SignIn>
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
