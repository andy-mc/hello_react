import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField } from "../actions"
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchRobots from "../components/SearchRobots";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => { 
  return {
    onSearchChange: (event) => dispatch(
      setSearchField(event.target.value)
    )
  }
}

class App extends Component {
  constructor() { 
    super();
    this.state = {
      robots: []
    }
  }

  componentWillMount() {
    fetch('https://my-json-server.typicode.com/andy-mc/hello_react/get')
    .then(response => response.json())
    .then(robotsData => this.setState({robots: robotsData}))
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange} = this.props;

    const filteredRobots = robots.filter((robot) => { 
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    if (!robots.length) { 
      return <h1>Loading...</h1>
    }
    
    return (
      <div className="tc">
        <h1 className="f1 mt5">ROBOFRIENDS</h1>
        <SearchRobots filterRobots={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
