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
    score : 0,
    pups,
    message : "Click a pup to begin!",
    clickedPupsArray : []
  }
 // handleIncrement checks what pup was clicked and increments/shuffles

  checkClickedPups = (id) => {
    const clickedPupsArray = this.state.clickedPupsArray;
    const pups = this.state.pups;
    
    if (clickedPupsArray.includes(id)) {
      // set message state
      this.setState({ message: "You guess incorrectly! Try again" });
      // set state of count = 0 and clear array
      this.setState({ count : 0, clickedPupsArray: [] });
    } else {
      // set message state
      this.setState({ message: "You guessed correctly! Keep going" });
      // increment count and shuffle pups
      clickedPupsArray.push(id);
      this.setState({ count: this.state.count + 1, pups: this.shufflePups(pups) });
        if (this.state.count >= 11) {
          this.setState({ message: "You won! Click a pup to play again" });
          this.setState({ count : 0, score : 1, clickedPupsArray: [] });
        }
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
      score={this.state.score}
      message={this.state.message}
       />
      <Header />
      <Wrapper>
        {Object.keys(this.state.pups).map(key => (
          <PupCard
            checkClickedPups={() => this.checkClickedPups(this.state.pups[key].id)}
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
