import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import styles from "./Info.css";
import { Input, FormBtn } from "../../components/Form";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class Info extends Component {
  state = {

  };

  componentDidMount() {

  }

  render() {
    return (
      <div className="info-page">
        <div className="row justify-content-center">
          <h1 className="info-title">How It Works</h1>
        </div>
        <div className="row info-card justify-content-center align-items-center">
          <div className="col-md-2">
            <img className="info-img" src="https://pbs.twimg.com/profile_images/3480789362/9ba4b56283ce055bfe234aaabf91cd5f.jpeg" alt="img"></img>
          </div>
          <div className="col-md-6">
            <p className="info">Sign up and create a profile for free to start brewing</p>
          </div>
        </div>
        <div className="row info-card justify-content-center align-items-center">
          <div className="col-md-2">
            <img className="info-img" src="https://i.pinimg.com/736x/38/1e/b6/381eb6daed127ad4c847c70b22a3bafd--beer-festival-festival-party.jpg" alt="img"></img>

          </div>
          <div className="col-md-6">
            <p className="info">Learn about brewing beer from the "Beer University" or look at other recipes users have created all from your dashboard</p>
          </div>
        </div>
        <div className="row info-card justify-content-center align-items-center">
          <div className="col-md-2">
            <img className="info-img" src="http://www.thewinedirectory.net/images/craft_20beer.jpg" alt="img"></img>

          </div>
          <div className="col-md-6">
            <p className="info">Create a new beer by clicking on the "Create Beer" button in your dashboard.</p>
          </div>
        </div>
        <div className="row info-card justify-content-center align-items-center">
          <div className="col-md-2">
            <img className="info-img" src="https://pbs.twimg.com/profile_images/378800000794819270/915bfc6463b85eba6ca66eea1a8b3926.jpeg" alt="img"></img>

          </div>
          <div className="col-md-6">
            <p className="info">Navigate through the choices and select from our premium ingredients including Yiest, Base Malt, Specialty Grains, Adjuncts, Hops, and addons. Each brew will contain an approximate 5 gallon batch of beer, equaling approximately 48 bottles of beer.</p>
          </div>
        </div>
        <div className="row info-card justify-content-center align-items-center">
          <div className="col-md-2">
            <img className="info-img" src="https://assets-cdn.mrhyde.com/app/uploads/2017/12/11104059/five-of-the-best-limited-edition-christmas-beers-256x256.jpg" alt="img"></img>

          </div>
          <div className="col-md-6">
            <p className="info">Create a custom label and name for your beer. The label will be printed and attached to your bottles.</p>
          </div>
        </div>
        <div className="row info-card justify-content-center align-items-center">
          <div className="col-md-2">
            <img className="info-img" src="https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/fc/d8/47/fcd8473f-d7a8-3565-c4b4-515d9d0a11a6/source/256x256bb.jpg" alt="img"></img>

          </div>
          <div className="col-md-6">
            <p className="info">Submit your order and wait patiently for your delicious beer to arrive at your doorstep in about 5 weeks!</p>
          </div>
        </div>
        <div className="row info-card justify-content-center align-items-center">
          <div className="col-md-2">
            <img className="info-img" src="https://is3-ssl.mzstatic.com/image/thumb/Purple7/v4/14/80/60/148060ab-6470-49e1-cff1-6108d3831f07/source/256x256bb.jpg" alt="img"></img>

          </div>
          <div className="col-md-6">
            <p className="info">Check the progess of your beers from your dashboard</p>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <a className="main-page-link btn hvr-fade hvr-grow-shadow" href="/">Main Page</a>
        </div>

      </div>
    );
  }
}

export default Info;
