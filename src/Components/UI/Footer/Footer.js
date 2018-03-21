import React from 'react';

import { Menu, Image } from 'semantic-ui-react';
import './Footer.css'
const Footer = (props) => {
    return (
        <div className={'Footer'} inverted>
            <span>ReactFlix</span>
            <Image size='mini' src='https://img13.androidappsapk.co/300/1/b/1/br.com.ringa.queimadiaria.png' />
            <a href="https://www.github.com/pedrobertao"> by Pedro</a>
        </div>
    )
}

export default Footer;