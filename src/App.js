import React, {Component} from "react";
import CardList from "./CardList";
import SearchRobots from "./SearchRobots";
import { robots } from "./robots";

class App extends Component {
  constructor() { 
    super();
  }

  filterRobots = () => { 
    console.log('sad');
  }
  
  render() { 
    return (
      <div className="bg-green">
        <h1 className="tc pa4">ROBOFRIENDS</h1>
        <SearchRobots filterRobots={this.filterRobots} / >
        <CardList robots={robots} />
      </div>
    );
  }
};

export default App;
