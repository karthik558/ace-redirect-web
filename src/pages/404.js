import React from "react";

const ErrorPage = () => {  
  // When the page is not found, return to the home page after 0.1 seconds
  React.useEffect(() => { setTimeout(() => { window.location.href = "/"; }, 1); }, []);
  return ( <div className="error-page"> <h1>Oops!!</h1> </div> );    
};

export default ErrorPage;
