
import { Link } from "react-router";
import logo from "../assets/img/logo.png"

const Logo = () => {
    return (
        <Link to="/">
            <div className="flex items-center">
            <img src={logo} className="mb-5"></img>
            <p className=' text-4xl -ml-3'>ProFast</p>
        </div> 
        </Link>
        
    );
};

export default Logo;