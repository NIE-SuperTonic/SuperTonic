import React from 'react';
import './css/About.scss';
import Container from "../fragment/Container";
import Developer from "../fragment/Developer";
import Attribution from "../fragment/Attribution";
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
                <Developer name="Yathin" role="full-stack dev" detail=""/>
                <Developer name="Vishal" role="backend dev" detail=""/>
                <Developer name="Vaishnavi" role="front-end dev" detail=""/>
                <Developer name="Rohit" role="front-end dev" detail=""/>
                <Attribution/>
            </div>
        </Container>
    );
}

export default About;
