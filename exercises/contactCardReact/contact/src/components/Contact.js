import React from "react";

function Contact(props) {
  return (
    <div className="card">
      <h1>{`${props.firstName} ${props.lastName}`}</h1>
      <img src={props.img}/>
      <h3>{props.phone}</h3>
    </div>
  )
}

export default Contact;
