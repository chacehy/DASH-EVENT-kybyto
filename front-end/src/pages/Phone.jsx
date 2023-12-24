import NavBar from "../Components/NavBar"
import {Form , redirect , useActionData , useSearchParams} from "react-router-dom";

import BackButton from "../Components/Back-Button";



export async function action({request}) {


const phoneRegex  = /^(\+\d{1,3}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,12}$/;
  

  

    try {
     const formData = await request.formData()
   
     const phone = formData.get('phone');

    if(!phoneRegex.test(phone)) {
return redirect('/phone?message=Please Enter A valid phone number');
    }

   
     const postData =JSON.parse(localStorage.getItem('user'));

     postData.phone = phone;
   
    localStorage.setItem('user', JSON.stringify(postData));
   
  await fetch("http://localhost:3500/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      

    return redirect('/succed');
   
    }
   catch (err) {
    console.log(err);
   
     return "This user already exist"
     }
  
 
  
 }
export default function Phone() {
  const [searchParams , setSearchParams] = useSearchParams();
    const errorMessage =  searchParams.get('message');
    return (
        <div className="container">
        <NavBar width="99%"/>
     <main className="register-container">
     <BackButton path='country' />
     <div className="register-form">
     <h1>We might need your phone number</h1>

     {errorMessage && <h3 className="red">{errorMessage}</h3>}
     <div className="form-email">
     
      
     
     <Form method="post" 
          
          replace>
     <input type="tel" name="phone"  className="input"/>
     <button>Continue</button>
     </Form>
     </div>
     </div>
     
     
     
     </main>
     
     
     
     </div> 
    )
}