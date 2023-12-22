
import {createBrowserRouter , Route , RouterProvider ,createRoutesFromElements  } from "react-router-dom";
import {action as EmailAction} from "./pages/register.jsx"
import Home from "./pages/home.jsx"
import Register from "./pages/register.jsx";
import "../front-end/src/css/index.css"
import Password from "./pages/password.jsx";
import Name from "./pages/Name.jsx";
import Country from "./pages/Country.jsx";
import Phone from "./pages/Phone.jsx";
import Succed from "./pages/Succed.jsx";
const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Home />} />

  <Route path="/register" element={< Register/>} action={EmailAction} />
<Route path="/password" element={<Password />} />
<Route path="/name" element={<Name />} />
<Route path="/country" element={<Country />} />
<Route path="/phone" element={<Phone />} />
<Route path="/succed" element={<Succed />} />
  </>
  
));


function App() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}


export default App;