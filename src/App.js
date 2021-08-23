import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./assets/css/global.css";
import Menu from "./components/Menu";
import Nav from "./components/Nav.jsx";
import Spinner from "./components/Spinner";

const Portfolio = lazy(() => import("./screens/Portfolio.jsx"));
const Contact = lazy(() => import("./screens/Contact.jsx"));
const Blog = lazy(() => import("./screens/Blog.jsx"));
const About = lazy(() => import("./screens/About"));
const Home = lazy(() => import("./screens/Home"));

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          </Route>
          <Route path="/portfolio">
            <Suspense fallback={<Spinner />}>
              <Portfolio />
            </Suspense>
          </Route>
          <Route path="/about">
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense fallback={<Spinner />}>
              <Contact />
            </Suspense>
          </Route>
          <Route path="/blog">
            <Suspense fallback={<Spinner />}>
              <Blog />
            </Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
