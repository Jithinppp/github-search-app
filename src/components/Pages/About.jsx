import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image from "../Images/jithin.jpg";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
      <div>
        <h1 className="font-bold text-7xl mb-8">Hi,</h1>
        <p className=" text-xl mb-5 font-inter ">
          My name is <strong>Jithin P</strong>, I'm a self taught web developer
          specialized in frontend languages like HTML,CSS,Javascript and also
          focused on frontend framework ReactJs
        </p>
        <div className="mt-5 mb-5">
          <FontAwesomeIcon
            icon={faClipboard}
            className="mx-2 text-xl align-middle"
          />
          <a
            href="mailto:jithinpparammal@gmail.com"
            className="font-medium align-middle"
          >
            jithinpparammal@gmail.com
          </a>
        </div>
        <hr />
        <p></p>
      </div>
      <div className="flex justify-center mt-3">
        <img
          src={image}
          className="w-1/2 rounded-full justify-items-center	"
          alt="jithin"
        />
      </div>
    </div>
  );
}

export default About;
