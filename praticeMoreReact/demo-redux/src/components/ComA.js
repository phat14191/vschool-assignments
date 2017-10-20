import React from "react";
import ComB from "./ComB";

function ComA() {
  return (
    <div style={{width:200, height:200, backgroundColor:"blue", justifyContent:"center", alignItem:"center"}}>
      <ComB />
    </div>
  )
}

export default ComA;
