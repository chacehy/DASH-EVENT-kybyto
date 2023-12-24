
import {createBrowserRouter , Route , RouterProvider ,createRoutesFromElements , redirect  } from "react-router-dom";
import {action as EmailAction} from "./pages/register.jsx"
import {action as NameAction} from "./pages/Name.jsx"
import {action as CountryAction} from "./pages/Country.jsx"
import {createBrowserHistory} from "history"

import { action as PasswordAction } from "./pages/password.jsx";

import { action as PhoneAction} from "./pages/Phone.jsx"

import {loader as RegisterLoader} from "./pages/register.jsx"
import Home from "./pages/home.jsx"
import Register from "./pages/register.jsx";

import "../../../front-end/src/css/index.css"
import Password from "./pages/password.jsx";
import Name from "./pages/Name.jsx";
import Country from "./pages/Country.jsx";
import Phone from "./pages/Phone.jsx";
import Succed from "./pages/Succed.jsx";

const history  = createBrowserHistory();


function loader(props1,props2,props3) {
 


  const path = history.location.pathname;

  const url = new URL(window.location.href);

 console.log(props1,props2,props3)

  const pathnameURL = url.pathname;

  console.log(path , pathnameURL);

  if(path !=='/'  && pathnameURL !== `/${props2}` && pathnameURL !== `/${props3}`   ) {
    
    return redirect('/register?message=You must register first');
  
  }
  return null;
    
  
}

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Home />} />

  <Route path="/register" element={< Register/>} action={EmailAction} loader={RegisterLoader} />
<Route path="/password" element={<Password />} action={PasswordAction} loader={() => loader('password','register' , 'name')} />
<Route path="/name" element={<Name />} action={NameAction} loader={() => loader('name','password' , 'country')}   />
<Route path="/country" element={<Country />} action={CountryAction} loader={() => loader('country','name' , 'phone')} />
<Route path="/phone" element={<Phone />} action={PhoneAction}  loader={() => loader('phone','country' , 'succed')}/>
<Route path="/succed" element={<Succed />} loader={() => loader('phone')} />
  </>
  
));


function App() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}


export default App;