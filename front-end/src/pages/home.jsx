
import "../css/index.css";
import Flutter from "../assets/flutter-1.svg";
import Dash from "../assets/dash-1.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
    <nav className="navbar-1">
  
      <span>
        <img src={Flutter} className="logo" alt="flutter"/> 
         <p>FLUTTER</p>     
         </span>
        <Link to="/login">LOG IN</Link>
</nav>
<section className="event-container">
    <div className="event-details">
        <div className="event-title">
            <p>FLUTTERING INTO EXCELLENCE, DASHING TOWARD SUCCESS!</p>
        </div>
        <div className="event-description">
            <p>JOIN US FOR THE ULTIMATE DASH EVENT! REGISTER NOW AND BE PART OF A CODING EXPERIENCE LIKE NO OTHER. DO NOT MISS OUT. SIGN UP TODAY.</p>
        </div>
        <div className="event-registration">
            <Link to="/register"><p>REGISTER NOW</p></Link>
        </div>
    </div>
    <div className="event-image">
        <img src={Dash} className="event-image-item" alt="dash"/>
    </div>
</section>

</div>
  )
}

export default Home;
