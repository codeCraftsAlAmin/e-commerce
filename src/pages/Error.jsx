import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="err_sec">
      <div className="err">
        <h2>404</h2>
        <h2>UH! OH. You're lost</h2>
        <p>
          The page you're looking for doesn't exist. How you got here is a
          mystrey. But you can click the button below to go back to the home
          page
        </p>
        <Link className="btn" to={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
