/* eslint-disable */
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
        </div>
    );
}

export default Footer;