import Flutter from "../assets/flutter-1.svg";
import { Form, Link, useActionData } from "react-router-dom";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("msg");
}

export async function action({request}) {

const formData = await request.formData()

const email = formData.get('email');
console.log(`email is  : ${email}`)

const postData = {
email : email
};

try {
const res = await fetch("http://localhost:3500/register/email", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
});

const data = await res.json();

}


catch(err) {
return err.message;
}

}
export default function Register() {

  
  const errorMessage = useActionData();


    return (
        <div className="container">
        <nav className="navbar-1">
  
        <span>
          <img src={Flutter} className="logo" alt="flutter"/> 
        <div className="score-bar"></div>
           </span>
          
  </nav>

  <main className="register-container">
<div className="register-form">
<h1>CREATE YOUR ACCOUNT</h1>
<p>Already have an account? <Link className="bold">Log in</Link></p>
<div className="form-email">

      <p>First, Enter Your Email Adress</p>
      {errorMessage && <h3 className="red">{errorMessage}</h3>}

    <Form method="post" 
         
         replace>
<input type="text" name="email"  className="input"/>
<button>Next</button>
    </Form>
</div>
</div>



  </main>
  
  
  
  </div>    )
}