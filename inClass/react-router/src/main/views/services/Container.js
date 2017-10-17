import React from "react";
import ServicesComponent from "./Component";
import {Link} from "react-router-dom";

class ServicesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      services: []
    }
    this.genLinks = this.genLinks.bind(this);
    this.searchById = this.searchById.bind(this);
  }

  componentDidMount() {
    this.setState({
      services: [

        {title: "mow lawn",
         price: 50,
         _id: "2387we8fbr8f"},

        {title: "rake leaves",
        price: 200,
        _id: "1387we8fbr9f"},

        {title: "yoga lesson",
        price: 500,
        _id: "0787wd8fbr2f"}
      ]
    })
  }

  searchById(id) {
    return this.state.services.find((service) => {
      return id === service._id
    });
  }

  genLinks(){
    return this.state.services.map((service) => {
      return <Link
              key = {service._id}
              to = {`/services/${service._id}`}>{service.title}
             </Link>
    });
  }
  render() {
    return (
      <ServicesComponent
        genLinks = {this.genLinks}
        searchById = {this.searchById}
      />
    )
  }
}

export default ServicesContainer;
