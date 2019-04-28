import React from "react";
import CardList from "./CardList";
import SearchRobots from "./SearchRobots";
import {robots} from "./robots";

const App = () => {
  return (
    <div className="bg-green">
      <h1 className="tc pa4">ROBOFRIENDS</h1>
      <SearchRobots / >
      <CardList robots={robots} />
    </div>
  );
};

export default App;
