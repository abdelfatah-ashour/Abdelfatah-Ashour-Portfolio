import React from "react";
import {AiOutlineClose} from "react-icons/ai";
import {BiMenuAltRight} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import "../assets/css/menu.css";
import {HIDE_MENU, SHOW_MENU} from "../redux/slices";

export default function Menu() {
  const locate = useLocation();
  const dispatch = useDispatch();
  const activeMenu = useSelector(state => state);
  const pathName = locate.pathname.slice(1).toString();
  const links = [
    {link: "/", page: "home"},
    {link: "/about", page: "about me"},
    {link: "/portfolio", page: "portfolio"},
    {link: "/contact", page: "contact me"},
    {link: "/blog", page: "blog"},
  ];
  return (
    <div className="menu">
      <div className="bar">
        <h3>{pathName === "/" ? "home" : pathName}</h3>
        <div className="menu-logo" onClick={() => dispatch(SHOW_MENU())}>
          <BiMenuAltRight />
        </div>
      </div>
      <ul
        className={activeMenu.menuState ? "list-menu translated" : "list-menu"}
      >
        <button className="close-menu" onClick={() => dispatch(HIDE_MENU())}>
          <AiOutlineClose />
        </button>
        {links.map((item, i) => {
          return (
            <li key={i} onClick={() => dispatch(HIDE_MENU())}>
              <Link to={item.link}> {item.page}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
