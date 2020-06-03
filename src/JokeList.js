import React, { Component } from "react";
import Joke from "./Joke";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {
    const jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let resp = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      resp = await resp.json();
      jokes.push(resp.joke);
    }
    this.setState({ jokes });
  }

  render() {
    return (
      <div className="JokeList">
        <h1>Dad Jokes</h1>
        <div className="JokeList-jokes">
          {this.state.jokes.map((joke) => (
            <div>{joke}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
