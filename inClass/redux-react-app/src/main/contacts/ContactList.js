import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact";

function ContactList(props) {
  const style = {
    display: "flex"
  }

  console.log(props);
  return (
    <div style = {style}>
      {props.contactList.map((contact, i) => {
        return (
          <Contact
            key = {contact.firstName + i}
            contact = {contact}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {})(ContactList);
