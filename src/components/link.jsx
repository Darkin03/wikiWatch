import { Link } from "react-router-dom";

import {  MdBookmarks } from "react-icons/md";

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
