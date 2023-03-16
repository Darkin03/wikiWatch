import {CiDatabase, CiFacebook,CiInstagram,CiLinkedin} from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
export function WebEnd() {
  return (
    <footer>  
      <div className="info">
        <div className="image">
            <a href="https://www.themoviedb.org/">
            <img  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"/>
            </a>
            
        </div>
        <div className="links">
          <h1>Contacts!</h1>
          <div className= "icons">
            <a href="https://www.linkedin.com/in/esnaideror/"><CiLinkedin className="icon"/></a>
            <a href="https://github.com/Darkin03/"><AiFillGithub className="icon"/></a>
            <a href="https://www.instagram.com/esnaider.or/"><CiInstagram className="icon"/></a>
          </div>
            
        </div>
      </div>

    </footer>
  );
}
