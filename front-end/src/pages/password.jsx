import Flutter from "../assets/flutter-1.svg";
import { Form, Link, useActionData , redirect } from "react-router-dom";
import NavBar from "../Components/NavBar";
export default function Password() {

return (
    <div className="container">
    <NavBar width="27%"/>

<main className="register-container">
<div className="register-form">
<h1>Enter your password</h1>
<div className="form-email">

  <p>It must contain at least 6 digits </p>
 

<Form method="post" 
     
     replace>
<input type="password" name="password"  className="input"/>
<Link to="/name">Continue</Link>
</Form>
</div>
</div>



</main>



</div> 
)

}