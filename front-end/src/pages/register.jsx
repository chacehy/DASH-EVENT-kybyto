import { Form,  useActionData , redirect , useLoaderData} from "react-router-dom";

import NavBar from "../Components/NavBar";


export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}


export async function action({request}) {

const formData = await request.formData()

const email = formData.get('email');

if(!email) {
  return "Please Enter A email";
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(!emailRegex.test(email)) {
  return redirect('/register?message=Please Enter A valid email');
}


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

const data =   await res.json();

console.log(data);

const myUser = {
  id : data,
  email: email,
  password : "",
  name : "",
  country : "",
phone :""
}

localStorage.setItem('user', JSON.stringify(myUser));
return redirect('/password');

}


catch(err) {

return "This email is already used"
}

}
export default function Register() {

  const message = useLoaderData();
  const errorMessage = useActionData();


    return (
        <div className="container">
        <NavBar width="2%"/>
  <main className="register-container">
    
<div className="register-form">
<h1>CREATE YOUR ACCOUNT</h1>

<div className="form-email">

      <p>First, Enter Your Email Adress</p>
      {message && <h3 className="red">{message}</h3>}

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