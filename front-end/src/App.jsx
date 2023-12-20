
import {createBrowserRouter , Route , RouterProvider ,createRoutesFromElements  } from "react-router-dom";
import {action as EmailAction} from "./pages/register.jsx"
import Home from "./pages/home.jsx"
import Register from "./pages/register.jsx";
import "./index.css"
const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Home />} />

  <Route path="/register" element={< Register/>} action={EmailAction} />

  </>
  
));


function App() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}


export default App;