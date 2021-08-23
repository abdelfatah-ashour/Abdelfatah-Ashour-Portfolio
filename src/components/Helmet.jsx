import {Helmet} from "react-helmet";
import React from "react";

export default function SEO({title}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="In Jul 2019 I’m started my career shift to web development with HTML-CSS -JavaScript and React.js as a framework for complex projects, I’m looking for an opportunity to get more experience, I have the flexibility to work from anywhere and grow with the team and work together."
      />
    </Helmet>
  );
}
