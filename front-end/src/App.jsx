
import {createBrowserRouter , Route , RouterProvider ,createRoutesFromElements  } from "react-router-dom";

import Home from "./pages/home.jsx"
import Register from "./pages/register.jsx";
const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Home />} />

  <Route path="/register" element={< Register/>} />

  </>
  
));


function App() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}


export default App;