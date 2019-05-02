import React, {Component} from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchRobots from "../components/SearchRobots";
import './App.css';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      robotSearchInput: '',
      robots: []
    }
  }

  componentWillMount() {
    fetch('https://my-json-server.typicode.com/andy-mc/hello_react/get')
    .then(response => response.json())
    .then(robotsData => this.setState({robots: robotsData}))
  }

  filterRobots = (event) => { 
    this.setState({
      robotSearchInput: event.target.value
    })
  }
  
  render() {
    const { robots, robotSearchInput } = this.state;

    const filteredRobots = robots.filter((robot) => { 
      return robot.name.toLowerCase().includes(robotSearchInput.toLowerCase())
    });

    if (robots.length === 0) { 
      return <h1>Loading...</h1>
    }
    
    return (
      <div className="tc">
        <h1 className="f1 mt5">ROBOFRIENDS</h1>
        <SearchRobots filterRobots={this.filterRobots} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
};

export default App;
