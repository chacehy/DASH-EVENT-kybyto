import { Form, redirect , useActionData , useSearchParams } from "react-router-dom";
import NavBar from "../Components/NavBar";

import BackButton from "../Components/Back-Button";






export async function action({request}) {
  try {
  const formData = await request.formData()

  const password = formData.get('password');

  if(password.length < 6) {
    console.log('ACTION BROORO')

return redirect('/password?message=Password must be at least 6 characters');
  }
    

  const postData =JSON.parse(localStorage.getItem('user'));
console.log(postData)
  postData.password = password;

  localStorage.setItem('user', JSON.stringify(postData));

 return redirect('/name');

  }
  catch (err) {
   console.log(err);

   return err.message;
  }

}

export default function Password() {
  let [searchParams, setSearchParams] = useSearchParams();

  
  const message = searchParams.get('message');

return (
    <div className="container">
    <NavBar width="27%"/>

<main className="register-container">
<BackButton path='register' />
<div className="register-form">
<h1>Enter your password</h1>
<div className="form-email">

  <p>It must contain at least 6 digits </p>
  {message && <h3 className="red">{message}</h3>}


<Form method="post" 
     
     replace>
<input type="password" name="password"  className="input"/>
<button>Continue</button>

</Form>
</div>
</div>



</main>



</div> 
)

}