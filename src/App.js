import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import PupCard from "./components/PupCard";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import pups from "./pups.json";


class App extends Component {
  
  state = { 
    count : 0,
    pups,
    message : "Click a pup to begin!"
  }
 // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
      pups: this.shufflePups(pups)
     });
    console.log("you clicked a pup");
  }

  checkClickedPup = (pups) => {
    let clickedPupsArray = [];
    let clickedPup = this.state.pups.id;

    if (clickedPupsArray.contains(clickedPup)) {
      // set message state
      this.setState({ message: "You guess incorrectly!" });
      // clear out clickedPupsArray
      clickedPupsArray = [];
      // set state of count = 0
      this.setState({ count : 0 });
      // restart game
      // set route to "/" to home page??
    } else {
      // set message state
      this.setState({ message: "You guessed correctly!" });
      // increment count and shuffle pups
      this.setState({ count: this.state.count + 1, pups: this.shufflePups(pups) });
      // push pups[key] to clickedPupsArray
      clickedPupsArray.push(clickedPup);
    }
    return pups;
  }

  shufflePups = (pups) => {
    for( let i = pups.length -1; i > 0; i-- ) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pups[i];
      pups[i] = pups[j];
      pups[j] = temp;
    }
    return pups;
  }

  // Map over this.state.pups and render a PupCard component for each pup object
  render() {
    return (
      <React.Fragment>
      <Nav
      count={this.state.count}
      message={this.state.message}
       />
      <Header />
      <Wrapper>
        {Object.keys(this.state.pups).map(key => (
          <PupCard
            handleIncrement={this.handleIncrement}
            shufflePups={this.shufflePups}
            checkClickedPups={() => this.checkClickedPups(this.state.pups[key.id].id)}
            key={key}
            details={this.state.pups[key]}
          />
        ))}
      </Wrapper>
      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
