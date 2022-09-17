import React from "react";
import UpworkIcon from "../../static/svg/upwork.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const ContactIcons = () => (
  <ul className="icons">
    {data.map(s => (
      <li key={s.label}>
        <a href={s.link} target="_blank">
          <s.Icon />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
