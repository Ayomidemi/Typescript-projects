import * as React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-logo">
              <h1>PEASE</h1>
            </div>
            <div className="footer-right">
            <div>
              <a
                href="https://www.linkedin.com/in/peace-adeniji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="social-icons" />
              </a>
              <a
                href="https://twitter.com/Pease_xoxo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icons" />
              </a>
              <a
                href="https://github.com/Ayomidemi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icons" />
              </a>
            </div>

            <p>Made with &#10084; by <a href="http://github.com/Ayomidemi"> 
            <b> Pease Adeniji</b> </a></p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
