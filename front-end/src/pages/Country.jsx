import NavBar from "../Components/NavBar";
import CountrySelector from "../Components/countrySelector";
import { Form , Link } from "react-router-dom";
const Country = () => {
    return (
        <div className="container">
        <NavBar width="75%"/>
     <main className="register-container">
     <div className="register-form">
     <h1>Where do you come from ?</h1>
     <div className="form-email">
     
      
      
     
     <Form method="post" 
          
          replace>
     <CountrySelector />
     <Link to="/phone">Continue</Link>
     </Form>
     </div>
     </div>
     
     
     
     </main>
     
     
     
     </div>  
    )
};

export default Country;