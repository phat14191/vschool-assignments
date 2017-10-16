import React from "react";

class ItemContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ItemComponent
      todo ={this.props.todo}
      handleDelete={this.props.handleDelete}
      />
    )
  }
}

export default ItemContainer;
