
import "./css/index.css";
import Flutter from "./assets/flutter-1.svg";
import Dash from "./assets/dash-1.png";

function App() {
  return (
    <div className="container-page-1">
    <nav className="navbar-1">
  
      <span>
        <img src={Flutter} className="logo" alt="flutter"/> 
         <p>FLUTTER</p>     
         </span>
        <a href="">LOG IN</a> 
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
            <button type="button"><p>REGISTER NOW</p></button>
        </div>
    </div>
    <div className="event-image">
        <img src={Dash} className="event-image-item" alt="dash"/>
    </div>
</section>

</div>
  )
}

export default App
