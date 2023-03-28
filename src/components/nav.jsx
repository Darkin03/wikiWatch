//import icons
import { MdTheaters } from "react-icons/md";
import { CiMonitor, CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Logo } from "./link";
export function Navegator() {
  return (
    <header className="navWeb">
      <Logo />
      <CiYoutube className="iconDeco" />

      <nav>
        <NavLink to="/movies" className='link'><MdTheaters className="icon" /> Movies</NavLink>
        <NavLink to="/tv" className='link'><CiMonitor className="icon" /> Tv</NavLink>
      </nav>
    </header>
  );
}
