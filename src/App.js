import React, {Component} from "react";
import CardList from "./CardList";
import SearchRobots from "./SearchRobots";
import { robots } from "./robots";

class App extends Component {
  constructor() { 
    super();
    this.state = {
      robots,
      robotSearchInput: ''
    }
  }

  filterRobots = (event) => { 
    this.setState({
      robotSearchInput: event.target.value
    })
  }
  
  render() {
    const filteredRobots = this.state.robots.filter((robot) => { 
      return robot.name.toLowerCase().includes(this.state.robotSearchInput.toLowerCase())
    });

    return (
      <div className="tc">
        <h1 className="mt5">ROBOFRIENDS</h1>
        <SearchRobots filterRobots={this.filterRobots} / >
        <CardList robots={filteredRobots} />
      </div>
    );
  }
};

export default App;
