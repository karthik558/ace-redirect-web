import React from "react";

const Index = () => {
  return (
    <section id="home">
    <header className="mobile-app valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="caption">
              <h1 className="mb-20">
                Ace Financials & HR Payroll
              </h1>
              <p>
                  Welcome to Ace Financials & HR Portal. Access either server. Use server 2 if server 1 is unavailable.
              </p>
              <div className="butons mt-50">
                <a href="http://182.156.77.204/ace" className="butn-gr rounded buton">
                  <span>Access Server 1</span>
                </a>                
                  <a href="http://49.204.64.212/ace" className="butn-gr rounded buton">
                    <span>Access Server 2</span>
                  </a>                
                </div>                
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="img-header">
                <img src="/img/image-header-lap.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
    </section>
  );
};

export default Index;
