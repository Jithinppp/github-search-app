import { faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container font-pop text-center">
      <div className="container">
        <h1 className="text-5xl tracking-tighter font-semibold mb-3 ">
          Oops !
        </h1>
        <FontAwesomeIcon icon={faBomb} className="text-6xl my-7" />
      </div>
      <p className="tracking-wider font-extralight mb-6">
        Something went wrong...
      </p>
      <Link to="/" className="btn btn-outline px-6">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
