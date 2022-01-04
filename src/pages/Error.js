import React, { useState } from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return <div className="error-page section">
    <div className="error-container">
      <h1>Opps! 404 page not found :)</h1>
      <Link to="/" className="btn btn-primary">Home</Link>
    </div>
  </div>;
}

export default Error;