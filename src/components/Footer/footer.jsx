import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="https://acefinancials.com/" className="logo-brand mb-40">
                <img src="/img/logo/logo-footer.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Resources</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://karthiklal.in/contact.html">Report Bugs</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Site Map</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="item-clumn links sm-mb50">
              <h5 className="title">Links</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://www.pauljohnhotels.com/">Website</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://github.com/karthik558/redirect-website">Site Source</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://karthiklal.in/contact.html">Quick Help</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links">
              <h5 className="title mb-30">Contact</h5>
              <div className="info">
                <span>Email Address</span>
                <h6>
                  <a href="mailto:itklr@thepaul.in">support@thepaul.in</a>
                </h6>
              </div>
              <div className="social mt-30">
                <a href="https://facebook.com/karthik5588">
                  <i className="fab fa-facebook-f"></i>
                </a>                
                <a href="https://instagram.com/_karthiklal">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/karthik558">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://x.com/_karthiklal">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>
                  © 2023. Designed & Developed by{" "}
                  <a href="https://karthiklal.in">KARTHIK LAL.</a> All right
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </footer>
  );
};

export default Footer2;
