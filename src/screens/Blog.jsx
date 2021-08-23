import React from "react";
import SEO from "../components/Helmet";
import TopHeading from "../components/TopHeading";

export default function Blog() {
  return (
    <React.Fragment>
      <SEO title="Blogs" />
      <TopHeading headBack="posts" headFront="my" span="blog" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <h3
          style={{
            textAlign: "Center",
            color: "#fff",
            textTransform: "uppercase",
            wordSpacing: "8px",
          }}
        >
          no available blogs now!
        </h3>
      </div>
    </React.Fragment>
  );
}
