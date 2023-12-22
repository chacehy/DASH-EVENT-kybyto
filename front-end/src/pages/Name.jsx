import NavBar from "../Components/NavBar";
import Flutter from "../assets/flutter-1.svg";
import { Form, Link, useActionData , redirect } from "react-router-dom";
export default function Name() {
    return(
        <div className="container">
       <NavBar width="50%"/>
    <main className="register-container">
    <div className="register-form">
    <h1>What is your full name ?</h1>
    <div className="form-email">
    
      <p>Enter a valid name</p>
     
    
    <Form method="post" 
         
         replace>
    <input type="text" name="name"  className="input"/>
    <Link to="/name">Continue</Link>
    </Form>
    </div>
    </div>
    
    
    
    </main>
    
    
    
    </div> 
    )
}