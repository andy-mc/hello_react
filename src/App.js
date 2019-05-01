import React, {Component} from "react";
import CardList from "./CardList";
import SearchRobots from "./SearchRobots";
import { robots } from "./robots";
import './App.css';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      robots: [],
      robotSearchInput: ''
    }
  }

  componentWillMount() {
    this.setState({robots})
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
        <h1 className="f1 mt5">ROBOFRIENDS</h1>
        <SearchRobots filterRobots={this.filterRobots} / >
        <CardList robots={filteredRobots} />
      </div>
    );
  }
};

export default App;
