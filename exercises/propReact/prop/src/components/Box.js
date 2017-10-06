import React from "react";

function Box(props) {   //{ javascripts}
  const styles = {
    backgroundImage: `url(${props.img}) no-repeat center center fixed`,
    backgroundSize: "cover"
  }
  return (
    <div className="box" style={styles} >
      <img src={props.img} alt=""/>
     </div>

  )
}
export default Box;
