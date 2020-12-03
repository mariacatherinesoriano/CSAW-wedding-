import React, {Component} from "react";
import {Link} from "react-router-dom";
import Timer from "../Timer";
import '../CSS/img.module.css';
import logo from "../img/logo.jpg";
import img from "../CSS/img.module.css"
import timer from '../CSS/timer.module.css'
import title from '../CSS/title.module.css'


class Home extends Component {
render () {
    return(
        <div>
        <div className="banner">
        <div className={img.logo}><img src={logo} alt="logo"/></div>
        <div className={title.header}>
        Aaron <small class="and">and</small> Carla</div>
        </div>
        <div className={title.subheading}>
        31 March 2021 | Sargeant's Mess
        </div>
        <div className={timer.span}>
        <div className={timer.timesection}>
        <Timer/></div></div>
        <div>
        <Link to="/Details">
        <href class="amber accent-4 btn"> Details</href>
        </Link>
        <Link to="/Program">
        <href class="amber accent-4 btn">Program</href>
        </Link>
        <Link to="/RSVP">
        <href class="amber accent-4 btn">RSVP</href>
        </Link>
        <Link to="/Registry">
        <href class="amber accent-4 btn">Registry</href>
        </Link></div>
        </div>
    )
}
}

export default Home;