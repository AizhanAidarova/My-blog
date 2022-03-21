import React from 'react';
import "../../index.css";
import facebook from "../../media/icons/facebook.png";
import insta from "../../media/icons/instagram.png";
import twitter from "../../media/icons/twitter.png";
import styles from "./Footer.module.css"

const container = {
    backgroundColor:'#8a692ca1',
    color:'white'
}
const title = {
    textAlign:'center',
    fontsize:'30px'
}
const Footer = () => {
    return (
        <footer className="w3-container w3-padding-32 w3-margin-top my-container">
            <p style={title}>Copyright 2022 Bishkek</p>
            <ul className={styles.socialContainer}>
                <li><img src={facebook} alt=""/></li>
                <li><img src={insta} alt=""/></li>
                <li><img src={twitter} alt=""/></li>
            </ul>
        </footer>
    );
};

export default Footer;