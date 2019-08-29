import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import PupCard from "./components/PupCard";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import pups from "./pups.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pups,
    count: 0
  };

  // removePup = id => {
  //   // Filter this.state.pups for pups with an id not equal to the id being removed
  //   const pups = this.state.pups.filter(pup => pup.id !== id);
  //   // Set this.state.pups equal to the new pups array
  //   this.setState({ pups });
  // };

  shufflePupPics = () => {
    alert("you clicked on a pup!");
     // handleIncrement increments this.state.count by 1
    // handleIncrement = () => {
    //   // We always use the setState method to update a component's state
    //   this.setState({ count: this.state.count + 1 });
    // };
  };
  // // handleIncrement increments this.state.count by 1
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count + 1 });
  // };
  // // handleDecrement decrements this.state.count by 1
  // handleDecrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count - 1 });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <React.Fragment>
      <Nav />
      <Header />
      <Wrapper>
        {this.state.pups.map(pup => (
          <PupCard
            handleIncrement={this.handleIncrement}
            shufflePupPics={this.shufflePupPics}
            key={pup.id}
            image={pup.image}
          />
        ))}
      </Wrapper>
      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
