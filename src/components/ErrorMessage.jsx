import React from "react";
import cancle from ".././assets/cancle.svg";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Oops, Something Went Wrong!</h1>
        <p className="error-message">{message}</p>
        <p className="error-suggestion">
          Please try again later or contact support.
        </p>
        <div className="error-image">
          <img src={cancle} alt="Error" />
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
