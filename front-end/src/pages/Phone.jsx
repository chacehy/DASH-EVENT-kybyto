import NavBar from "../Components/NavBar"
import {Form  , Link } from "react-router-dom"
export default function Phone() {
    return (
        <div className="container">
        <NavBar width="99%"/>
     <main className="register-container">
     <div className="register-form">
     <h1>We might need your phone number</h1>
     <div className="form-email">
     
      
     
     <Form method="post" 
          
          replace>
     <input type="tel" name="phone"  className="input"/>
     <Link to="/succed">Continue</Link>
     </Form>
     </div>
     </div>
     
     
     
     </main>
     
     
     
     </div> 
    )
}