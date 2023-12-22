import { Link } from "react-router-dom"
import Success  from "../assets/88794265806b906e5ed6b3f60a716a4a.png";
export default function Succed() {
return (
    <main className="container-succed">
<h1>Success !</h1>
<h1>
you are registered
</h1>
<img src={Success} alt="succed" />
<Link to="/">BACK TO HOMEPAGE</Link>   
    </main>
)

}