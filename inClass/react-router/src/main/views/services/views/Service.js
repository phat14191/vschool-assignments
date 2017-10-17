import React from "react";

function Service(props) {
  // console.log(props);
  const id = props.match.params.id
  const serviceInfo = props.searchById(id)
  // console.log(serviceInfo)
  // console.log(id)
  return (
    <div>
      <h2>{serviceInfo.title}</h2>
      <p>{`$${serviceInfo.price}`}</p>
    </div>
  )
}

export default Service;
