import React, { Component } from "react";
import SocialLink from "./SocialLink/SocialLink";

class PageFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <footer className="page-footer footer">
        <p className="footer__copyright">
          ALL RIGHTS RESERVED. COPYRIGHT ©
          <a className="footer__copyright-link" href="">
            <span>CKDIGITAL</span>
          </a>
        </p>

        <SocialLink />
      </footer>
    );
  }
}
export default PageFooter;
