import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1>Other Page</h1>
      <p>This is another page.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};
