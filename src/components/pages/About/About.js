import React, { Component } from 'react';
import Iframe from 'react-iframe'
import './About.scss';

class About extends Component {
    render() {
        return (
            <Iframe url="/heike.networkonepager.html"
                width="100%"
                height="1000"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen
                />
        );
    }
}

export default About;