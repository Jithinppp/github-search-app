import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer p-7 flex-col align-middle justify-center bg-black text-white font-pop ">
      <div className="container align-middle flex text-3xl justify-center">
        <a rel="noreferrer" href="https://github.com/Jithinppp" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="px-2 cursor-pointer " />
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/jithin-p-8396501b7/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="px-2 cursor-pointer" />
        </a>
      </div>
      <p className="m-auto">Copyright &copy; {year} all rights reserved</p>
    </footer>
  );
}

export default Footer;
