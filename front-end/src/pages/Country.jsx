import BackButton from "../Components/Back-Button";
import NavBar from "../Components/NavBar";
import CountrySelector from "../Components/countrySelector";
import { Form , redirect } from "react-router-dom";


export async function action({request}) {

   try {
    const formData = await request.formData()
  
    const country = formData.get('country');

 
  
    const postData =JSON.parse(localStorage.getItem('user'));
  console.log(postData)
    postData.country = country;
  
   localStorage.setItem('user', JSON.stringify(postData));
  
   return redirect('/phone');
  
   }
  catch (err) {
   console.log(err);
  
    return err.message;
    }
 

 
}

const Country = () => {
    return (
        <div className="container">
        <NavBar width="75%"/>
     <main className="register-container">
     <BackButton path='name' />
     <div className="register-form">
     <h1>Where do you come from ?</h1>
     <div className="form-email">
     
      
      
     
     <Form method="post" 
          
          replace>
     <CountrySelector />
     <button>Continue</button>
     </Form>
     </div>
     </div>
     
     
     
     </main>
     
     
     
     </div>  
    )
};

export default Country;