import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow(){
    
    return (
          <div className="social-container">
             <h3>{'\u00A9'}DRanjith2022</h3>
             <a href="https://twitter.com/Ranjith83127841" target="_blank" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
             <a href="https://www.facebook.com/ranjithreddy.devaram" target="_blank" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
             <a href="https://www.linkedin.com/in/ranjith-reddy-devaram-05405321a/" target="_blank" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
             <a href="https://www.instagram.com/ranjithreddydevaram/" target="_blank" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          </div>  
    )
}