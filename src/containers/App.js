import React from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: [], searchfield: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((inputRobot) => {
      return inputRobot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>loading robots</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}></SearchBox>
          <Scroll>
            <Cardlist robots={filteredRobots}></Cardlist>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;