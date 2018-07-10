
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
import Slideshow from "../../components/Slideshow/Slideshow";

class Home extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    id: "",
    beerNum: 0
  };

  componentDidMount() {
    console.log(sessionStorage);
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          console.log(res.data);
          this.setState({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email,
            password: res.data.password,
            id: res.data._id,
            beerNum: res.data.beerNum
          })
          sessionStorage.setItem("firstName", this.state.firstName);
          sessionStorage.setItem("lastName", this.state.lastName);
          sessionStorage.setItem("beerNum", this.state.beerNum);
          sessionStorage.setItem("email", this.state.email);
          sessionStorage.setItem("password", this.state.password);
          sessionStorage.setItem("id", this.state.id);
          window.location = "/dashboard";
          console.log(this.state);
        })
        .catch(err => console.log(err));
    }
  };

  handleRegisterSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
      API.registerUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        beerNum: 0
      })
        .then(res => {
          this.setState({
            id: res.data._id,
            beerNum: 0
          })
          sessionStorage.setItem("firstName", this.state.firstName);
          sessionStorage.setItem("lastName", this.state.lastName);
          sessionStorage.setItem("beerNum", this.state.beerNum);
          sessionStorage.setItem("email", this.state.email);
          sessionStorage.setItem("password", this.state.password);
          sessionStorage.setItem("id", this.state.id);
          window.location = "/dashboard";
          console.log(this.state);
        })
        .catch(err => console.log(err));
    }
  };

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
            <AccordionItemTitle className="sign-up hvr-fade hvr-grow-shadow">
              <p><i className="fas fa-beer"></i> Sign Up Now</p>
            </AccordionItemTitle>
            <AccordionItemBody >
              <form className="body">
                <Input
                  className="input"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  name="firstName"
                  placeholder="First Name"
                />
                <Input
                  className="input"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  placeholder="Last Name"
                />
                <Input
                  className="input"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email"
                />
                <Input
                  className="input"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
                  onClick={this.handleRegisterSubmit}
                >
                  Submit
              </FormBtn>
              </form>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>

        <Accordion className="accordion">
          <AccordionItem>
            <AccordionItemTitle className="log-in hvr-fade hvr-grow-shadow">
              <p><i className="fas fa-beer"></i> Login To Your Dashboard</p>
            </AccordionItemTitle>
            <AccordionItemBody >
              <form className="body">
                <Input
                  type="email"
                  className="input"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email"
                />
                <Input
                  type="password"
                  className="input"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="password"
                />
                <FormBtn
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleLoginSubmit}
                >
                  Submit
              </FormBtn>
              </form>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>

        <Slideshow />

        <p className="info-text">Custom Tap allows it's users all the fun of creating and customizing your own beer without the learning curve, mess, or equipment. Need more information on how it works?<a className="btn info-link hvr-fade hvr-grow-shadow" href="/info"> Click Here</a></p>
      </div>
    );
  }
}

export default Home;
