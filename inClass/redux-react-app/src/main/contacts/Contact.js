import React from "react";

function Contact(props) {

const style = {
  border: "4px solid brown",
  padding: "8px",
  color: "green",
  margin: "5px",
  backgroupColor: "magenta",
  borderRadius: "30%"
}

  return (
    <div style = {style}>
      <h3>{props.contact.firstName}</h3>
      <h5>{props.contact.lastName}</h5>
      <p>{props.contact.phone}</p>
    </div>
  )
}

export default Contact;
