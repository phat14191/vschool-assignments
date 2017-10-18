import React from "react";
import ItemComponent from "./Component";

class ItemContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ItemComponent
      todo = {this.props.todo}/>
    )
  }
}

export default ItemContainer;
