import Banner from "./Banner";

import classes from "./App.module.css";
import logoURL from "url:../static/logo192.png";

export default function App() {
  return (
    <div className={classes.App}>
      <Banner />
      <img src={logoURL} />
    </div>
  );
}
