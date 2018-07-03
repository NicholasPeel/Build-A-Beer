import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Slideshow.css";

class Slideshow extends Component {
    state = {

    };

    componentDidMount() {

    }

    render() {
        var settings = {
            dots: true,
            accessibility: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnDotsHover: true,
            adaptiveHeight: true
        };
        return (
            <Slider {...settings}>
                <div>
                    <slide className="slide">
                        <div className="layer"><img className="slide-img" src="http://www.crystalbeerparlor.com/blog/wp-content/uploads/2014/05/beers-header.jpg" alt="img" width="100%" height="600px"></img></div>
                        <span className="slide-text">Create your own custom beer.</span>
                    </slide>
                </div>
                <div>
                    <slide className="slide">
                        <div className="layer"><img className="slide-img" src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2018%2F04%2Fnational-beer-day-ipa.jpg&w=1600&q=70" alt="img" width="100%" height="600px"></img></div>
                        <span className="slide-text">Thousands of beer combinations.</span>
                    </slide>
                </div>
                <div>
                    <slide className="slide">
                        <div className="layer"><img className="slide-img" src="https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_571,q_80,w_1603/v1/clients/raleigh/c9f46402_cf96_4736_a2b0_2692aa5d588b_271afb93-2887-44f8-a95c-8a64128ab32a.jpg" alt="img" width="100%" height="600px"></img></div>
                        <span className="slide-text">Brewmaster brews your beer to perfection.</span>
                    </slide>
                </div>
                <div>
                    <slide className="slide">
                        <div className="layer"><img className="slide-img" src="http://kirkwoodstationbrewing.com/wp-content/uploads/2013/07/ksb-our-beers-header.jpg" alt="img" width="100%" height="600px"></img></div>
                        <span className="slide-text">Design a logo and name your beer.</span>
                    </slide>
                </div>
                <div>
                    <slide className="slide">
                        <div className="layer"><img className="slide-img" src="http://bestofdrinks.com/wp-content/uploads/2018/02/OLD-HOOKY-BEER-.jpg" alt="img" width="100%" height="600px"></img></div>
                        <span className="slide-text">Your custom beer shipped right to your door.</span>
                    </slide>
                </div>
                <div>
                    <slide className="slide">
                        <div className="layer"><img className="slide-img" src="http://www.crystalbeerparlor.com/blog/wp-content/uploads/2014/05/beers-header.jpg" alt="img" width="100%" height="600px"></img></div>
                        <span className="slide-text">Learn about brewing beer at the univerity</span>
                    </slide>
                </div>
                <div>
                    <slide className="slide">
                        <div className="layer"><img className="slide-img" src="https://img.huffingtonpost.com/asset/59ca6e831900004e5d565b26.jpeg?ops=1910_1000" alt="img" width="100%" height="600px"></img></div>
                        <span className="slide-text">See other user recipes in the recipe forum</span>
                    </slide>
                </div>
            </Slider>
        );
    }
}

export default Slideshow;