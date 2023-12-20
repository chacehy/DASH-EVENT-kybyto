import Flutter from "../assets/flutter-1.svg";
import { Form, Link } from "react-router-dom";
export default function Register() {


    return (
        <div className="container">
        <nav className="navbar-1">
  
        <span>
          <img src={Flutter} className="logo" alt="flutter"/> 
        
           </span>
          
  </nav>

  <main className="register-container">
<div className="register-form">
<h1>CREATE YOUR ACCOUNT</h1>
<p>Already have an account? <Link className="bold">Log in</Link></p>
<div className="form-email">
    <p>First, Enter Your Email Adress</p>
    <Form>
<input type="text"  className="input"/>
<button>Next</button>
    </Form>
</div>
</div>



  </main>
  
  
  
  </div>    )
}