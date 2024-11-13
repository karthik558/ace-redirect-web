import React from 'react';
import ScrollingImage from '../ScrollingImage/scrollingimage';

const Header = () => {
  return (
    <section id="home">
      <header className="mobile-app valign">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="caption">
                <h1 className="mb-20">
                  Ace Redirect Portal (For Paul Resorts)
                </h1>
                <p>
                  Welcome to Ace Financials Redirect Portal. Access Login and Approval pages below.
                </p>
                <div className="butons mt-50">
                  <a href="http://182.156.77.204/ace/Default.aspx" className="butn-gr rounded buton">
                    <span>Login Page</span>
                  </a>
                  <a href="http://182.156.77.204/ace/Approval.aspx" className="butn-gr rounded buton">
                    <span>Approval Page</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <ScrollingImage />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;