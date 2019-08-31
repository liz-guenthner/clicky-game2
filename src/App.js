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
    pups
  }
 // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1, pups: this.shufflePups(pups) });
    console.log("you clicked a pup");
  }

  checkClickedPup = (pups) => {
    let clickedPupsArray = [];
    let clickedPup = pups.includes(this.state.pups);
    if (clickedPup) {
      console.log('That pup is in the clickedPupsArray...Game over!');
      // shake Wrapper
      // clear out clickedPup array
      // restart game
      // count goes to 0
      // send error message
    } else {
      console.log('Good job, guess again!');
      // push pups[key] to clickedPupsArray
      // increment count by 1
      // show good message
      // run shufflePups function
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



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <React.Fragment>
      <Nav count={this.state.count} />
      <Header />
      <Wrapper>
        {Object.keys(this.state.pups).map(key => (
          <PupCard
            handleIncrement={this.handleIncrement}
            shufflePups={this.shufflePups}
            checkClickedPups={this.checkClickedPups}
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

// PSUEDO CODE:

// originalArray = [0,1,2,3,4,5,6,7,8,9,10,11];
// clickedPup = pups[i].id user clicked on
// clickedArray = push(pups[i])

// check if pups[i] is in clickedArray
//    yes => shake wrapper div, count: 0, show bad msg, restart game, clear clickedArray
//    no => score + 1, show good msg, push pups[i] into clickedArray, run shuffleArray(), display
//    shuffleArray() = orginalArray randomized;
