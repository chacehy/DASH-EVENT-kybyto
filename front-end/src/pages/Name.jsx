import NavBar from "../Components/NavBar";
import { Form,  redirect , useActionData, useSearchParams } from "react-router-dom";



import BackButton from "../Components/Back-Button";



export async function action({request}) {
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ'-]+)*$/;

  try {
  const formData = await request.formData()

  const name = formData.get('name');

if(!nameRegex.test(name)) {
return redirect('/name?message=Please Enter A valid name');
}

  const postData =JSON.parse(localStorage.getItem('user'));

  postData.name = name;

  localStorage.setItem('user', JSON.stringify(postData));

 return redirect('/country');

  }
  catch (err) {
   console.log(err);

   return err.message;
  }

}

export default function Name() {
  const [searchParams  , setSearchParams] = useSearchParams();
  const message =  searchParams.get('message') ;
    return(
        <div className="container">
       <NavBar width="50%"/>
    <main className="register-container">
      <BackButton path='password' />
    <div className="register-form">
    <h1>What is your full name ?</h1>
    <div className="form-email">
    
      <p>Enter a valid name</p>
      {message && <h3 className="red">{message}</h3>}
    
    <Form method="post" 
         
         replace>
    <input type="text" name="name"  className="input"/>
 <button>Continue</button>
    </Form>
    </div>
    </div>
    
    
    
    </main>
    
    
    
    </div> 
    )
}