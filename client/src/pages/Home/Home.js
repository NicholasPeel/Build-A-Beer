
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Input, FormBtn } from "../../components/Form";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import styles from "./Home.css";
import Slideshow from "../../components/Slideshow/Slideshow"

class Home extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  componentDidMount() {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>

        <Accordion className="accordion">
          <AccordionItem>
            <AccordionItemTitle className="sign-up">
              <p><i className="fas fa-beer"></i> Sign Up Now</p>
            </AccordionItemTitle>
            <AccordionItemBody >
              <form className="body">
                <Input
                  className="input"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  name="firstName"
                  placeholder="First Name (required)"
                />
                <Input
                  className="input"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  placeholder="Last Name (required)"
                />
                <Input
                  className="input"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email (required)"
                />
                <Input
                  className="input"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password (required)"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
              </FormBtn>
              </form>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>

        <Accordion className="accordion">
          <AccordionItem>
            <AccordionItemTitle className="log-in">
              <p><i className="fas fa-beer"></i> Login To Your Dashboard</p>
            </AccordionItemTitle>
            <AccordionItemBody >
              <form className="body">
                <Input

                  className="input"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email"
                />
                <Input
                  className="input"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="password"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
              </FormBtn>
              </form>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>

        <Slideshow />

        <p className="info-text">Was the awesome slideshow and cool graphics not enough to convince you to sign up for this awesome service? Do you need more information on how it works?<a className="info-link" href="/info"> Click here</a></p>
      </div>
    );
  }
}

export default Home;
