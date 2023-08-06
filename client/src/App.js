
import './App.css';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';
import {createBrowserRouter,RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signuppage />,
  },
  {
    path: "/loginpage",
    element: <Loginpage></Loginpage>,
  },
  

  
]);

function App(){
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
