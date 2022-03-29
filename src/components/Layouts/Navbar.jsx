import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow font-pop">
      <div className="container mx-auto">
        <div className="flex-none mx-2 px-2">
          <FontAwesomeIcon
            icon={faGithubAlt}
            className="text-2xl align-middle cursor-pointer text-black inline pr-2"
          />
          <Link
            to="/"
            className="align-middle cursor-pointer text-xl md:text-2xl xl:text-2xl text-black tracking-tighter font-semibold"
          >
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2 items-center ">
          <div className="flex justify-end">
            <Link
              to="/"
              className="text-sm xl:text-lg text-black-50 px-1 md:text-xl xl:px-2 "
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm xl:text-lg text-black-50 px-1 md:text-xl xl:px-2"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github search",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
