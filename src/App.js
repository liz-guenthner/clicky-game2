import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import PupCard from "./components/PupCard";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import pups from "./pups.json";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      pups
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleClickEvent = this.handleClickEvent.bind(this);
    // this.shufflePups = this.shufflePups.bind(this);
  };
  
 // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });

    console.log("you clicked a pup");
    console.log("The count is: " + this.state.count);

    // shufflePups = (pups) => {
    //   var i = pups.length, j = 0, temp;
  
    //   while (i--) {
    //     j = Math.floor(Math.random() * (i + 1));
    //     temp = pups[i];
    //     pups[i] = pups[j];
    //     pups[j] = temp;
    //   }
    //   return pups;
    // }
  
    // handleClickEvent = (pups) => {

    //   if (this.state.count == 0) {
    //     pups = this.shufflePups(pups);
    //     // We always use the setState method to update a component's state
    //     // this.setState({ count: this.state.count + 1 });

    //     // console.log("you clicked a pup");
    //     // console.log("The count is: " + this.state.count);
    //   }
    //   console.log(JSON.stringify(pups));
  
    // }
    
  };

  


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
            // shufflePups={this.shufflePups}
            // handleClickEvent={this.handleClickEvent}
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
