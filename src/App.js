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
  };
  
 // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    
    // this.setState({ pups });
    // const pups =  {...this.state.pups};
    // const count =  {...this.state.count};
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });

    console.log("you clicked a pup");
    console.log("The count is: " + this.state.count);
    
  
      // const pupsNow = this.state.pups.map(pups => {
      //   for (let i= (pups.length-1); i>0; i--) {
      //     const j = Math.floor(Math.random() * pups.length);
      //     const temp = pupsNow[i];
      //     pupsNow[i] = pupsNow[j];
      //     pupsNow[j] = temp;
      //   };
      //   this.setState({ pupsNow });
      // });
 
  };

  


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <React.Fragment>
      <Nav count={this.state.count} />
      <Header />
      <Wrapper>
        {this.state.pups.map(pup => (
          <PupCard
            handleIncrement={this.handleIncrement}
            key={pup.id}
            image={pup.image}
          />
        ))};
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
