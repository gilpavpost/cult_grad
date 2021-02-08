import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route} from "react-router-dom";
import AboutPage from "./components/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Newstape from "./components/newstape";
import Videos from "./components/video";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route exact path="/" component={App} />
      <Route exact path="/newstape" component={Newstape} />
      <Route exact path="/video" component={Videos} />

      <Route exact path="/about" component={AboutPage} />
      <Route path="/" component={Footer} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
