import "tachyons";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Card from "./Card";
import {robots} from "./robots";
import "./index.css";

ReactDOM.render(
  <div>
    {robots.map((robot) => { 
      return <Card key={robot.id} id={robot.id} name={robot.name}
              username={robot.username} email={robot.email} />;
    })}
  </div>
  , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
