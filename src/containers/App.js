import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions"
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchRobots from "../components/SearchRobots";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => { 
  return {
    onSearchChange: (event) => dispatch(
      setSearchField(event.target.value)
    ),
    requestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentWillMount() {
    this.props.requestRobots();
  }

  render() {
    const { robots, isPending, searchField, onSearchChange} = this.props;

    const filteredRobots = robots.filter((robot) => { 
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    if (isPending) { 
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
