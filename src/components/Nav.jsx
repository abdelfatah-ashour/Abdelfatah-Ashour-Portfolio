import React from "react";
import {GoPerson} from "react-icons/go";
import {MdBusinessCenter, MdLocalPostOffice} from "react-icons/md";
import {RiContactsFill, RiHome2Fill} from "react-icons/ri";
import {Link, useHistory, useLocation} from "react-router-dom";
import "../assets/css/nav.css";

export default function Nav() {
  const locate = useLocation();
  const route = useHistory();

  const handleForward = link => {
    route.push(link);
  };

  return (
    <div className="bar-right">
      <div>
        <Link to="/" >Home</Link>
        <span
          className={locate.pathname === "/" ? "active" : ""}
          onClick={() => handleForward("/")}
        >
          <RiHome2Fill />
        </span>
      </div>
      <div>
        <Link to="/about">About</Link>
        <span
          className={locate.pathname === "/about" ? "active" : ""}
          onClick={() => handleForward("/about")}
        >
          <GoPerson />
        </span>
      </div>
      <div>
        <Link to="/portfolio">Portfolio</Link>
        <span
          className={locate.pathname === "/portfolio" ? "active" : ""}
          onClick={() => handleForward("/portfolio")}
        >
          <MdBusinessCenter />
        </span>
      </div>
      <div>
        <Link to="/contact">contact</Link>
        <span
          className={locate.pathname === "/contact" ? "active" : ""}
          onClick={() => handleForward("/contact")}
        >
          <RiContactsFill />
        </span>
      </div>
      <div>
        <Link to="/blog">blog</Link>
        <span
          className={locate.pathname === "/blog" ? "active" : ""}
          onClick={() => handleForward("/blog")}
        >
          <MdLocalPostOffice />
        </span>
      </div>
    </div>
  );
}
