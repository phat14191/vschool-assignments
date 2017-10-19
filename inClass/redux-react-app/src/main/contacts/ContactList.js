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
      <button>Remove Contact</button>
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
  return {contactList: state.contactList}
}

export default connect(mapStateToProps, {})(ContactList);
