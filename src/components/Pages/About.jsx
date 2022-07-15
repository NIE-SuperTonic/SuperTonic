import React from 'react';
import './css/About.scss';
import Container from "../fragment/Container";
import Developer from "../fragment/Developer";
import Attribution from "../fragment/Attribution";
import Vaishnavi from "../assets/img/vaish.jpg"
import Vishal from "../assets/img/vishal.jpg"
import Rohit from "../assets/img/rohit.jpg"
import Yathin from "../assets/img/yathin.jpg"
// import { NULL } from 'sass';
// import {IconButton} from "@material-ui/core";
// import {Brightness3} from "@material-ui/icons";

const About = () => {
    return (
        <Container>
            <div className={"About"}>
            <h3 className={"Developer-head"}>Meet the developers</h3>
                {/* <div className="Dark-mode">
                    <h5>Dark mode to be available soon</h5>
                    <IconButton>
                        <Brightness3/>
                    </IconButton>
                </div> */}
                <Developer name="Yathin" image = {Yathin} role="full-stack dev" detail="Technical Core at UCSP, NIE." extra="I love gaming and playing football."/>
                <Developer name="Vishal" image = {Vishal} role="backend dev" detail="Vice Chairperson of UCSP, NIE."
                    extra="Special interest in UI/UX."
                />
                <Developer name="Vaishnavi" image = {Vaishnavi} role="front-end dev" detail="Women in engineering Secretary at IEEE, NIE." extra="Experienced in front-end through projects"/>
                <Developer name="Rohit" image = {Rohit} role="front-end dev" detail="Student from NIE, with a passion to learning new technologies."
                    extra="I love to go on rides and explore new places"
                />
                <Attribution/>
            </div>
        </Container>
    );
}

export default About;
