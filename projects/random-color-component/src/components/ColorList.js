import React from "react";
import ColorComponent from "./ColorComponent";

import axios from "axios";

class ColorList extends React.Component {
  constructor () {
    super()
    this.state = {
      colorList: [],
      colorList2: []
    }
  }

  componentDidMount() {
    axios.get("http://www.colr.org/json/color/random").then((response) => {
      this.setState({
        colorList: response.data.new_color,
      })
      console.log(response)
    })
    axios.get("http://www.colr.org/json/color/latest").then((response) => {
      this.setState({
        colorList2: response.data.new_color,
      })
      console.log(response)
    })
  }
  // this.setState({
  //   colorList2: response.data.matching_color,
  // })

  render(spot) {
    const styles = {
      height:"200px",
      backgroundColor:`#${this.state.colorList}`,
      textAlign:"center"
    }
    const styles2 = {
      height:"200px",
      width:"100%",
      backgroundColor:`#${this.state.colorList2}`,
      textAlign:"center"
    }

    return (
      <div>
        <div style={styles}>
          <ColorComponent
          />
        </div>
        <div style={styles2}>
          <ColorComponent
          />
        </div>
      </div>
    )
  }
}

export default ColorList;
