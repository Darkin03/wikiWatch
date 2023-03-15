import { Link } from "react-router-dom";

import { MdTheaters, MdBookmarks } from "react-icons/md";
import { CiMonitor, CiYoutube } from "react-icons/ci";
export function Logo() {
  return (
      <Link to="/" className="logo">
        <MdBookmarks className="icon" />
        <h1 className="title">
          Watch<span>wiki</span>
        </h1>
      </Link>
  );
}
