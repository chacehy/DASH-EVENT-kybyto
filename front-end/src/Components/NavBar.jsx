import { Link  } from "react-router-dom"
import Flutter from "../assets/flutter-1.svg"

export default function NavBar({width}) {
const style = {
  width : width,
}
    return (
        
      <nav className="navbar-1">
    
      <span>
       <Link to="/"><img src={Flutter} className="logo" alt="flutter" /> </Link> 
      <div className="score-bar">
      
      <div className="blue-bar">
          <div className="aqua-bar"  style={style}></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#34C8FF"/>
</svg>
           </div>
     
      <ul>
        <li>Email</li>
        <li>Password</li>
        <li>Name</li>
        <li>Country</li>
        <li>Phone</li>
      </ul>
  
      </div>
         </span>
        
  </nav>
  
    )

}