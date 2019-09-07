import React from "react";
import "./style.css";

class PupCard extends React.Component {

  render() {
    const { id, image } = this.props.details;
    return (
      <div role="img" aria-label="click item" className="click-item">
        <img alt="puppy pic" value={id} src={image} onClick={this.props.checkClickedPups}/>
      </div>
    );
  }
}

export default PupCard;