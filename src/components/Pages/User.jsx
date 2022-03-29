import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
//icons
import Repos from "../Repos/Repos";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faBoxOpen,
  faChartLine,
  faMapMarkedAlt,
  faUserCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function User() {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  useEffect(() => {
    getUser(params.login);
  }, []);

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12 font-pop">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost align-middle text-normal">
            <FontAwesomeIcon
              className="font-extrabold text-xl mr-2"
              icon={faAngleLeft}
            />
            Go back
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:gird-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rouunded-lg shadow-md card image-full">
              <figure>
                <img src={avatar_url} alt="avatar" />
              </figure>
              <div className="card-body justify-end">
                <h1 className="card-title mb-0 text-2xl">{name}</h1>
                <span className="font-extrathin text-sm">{login}</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-2">
              <h2 className="text-3xl card-title">
                {name}
                <div className="badge badge-success mr-1 ml-2">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hirable</div>
                )}
              </h2>
              <p className="mt-3 tracking-tighter font-inter text-xl">{bio}</p>
              <div className="card-actions mt-4">
                <a
                  target="_blank"
                  href={html_url}
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit github profile
                </a>
              </div>
            </div>
            <div className="w-full flex flex-wrap rounded-lg  bg-base-100 stats font-inter">
              {location && (
                <div className="p-4 m-1">
                  <div className="stat-title text-md">
                    <FontAwesomeIcon
                      icon={faMapMarkedAlt}
                      className="text-black text-xl"
                    />
                  </div>
                  <div className="text-sm stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className=" p-4 m-1">
                  <div className="stat-title text-md">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-black text-xl"
                    />
                  </div>
                  <a
                    href={`https://${blog}`}
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm stat-value"
                  >
                    {blog}
                  </a>
                </div>
              )}
              {twitter_username && (
                <div className="p-4 m-1">
                  <div className="stat-title text-md ">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-black text-xl"
                    />
                  </div>
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm stat-value"
                  >
                    {twitter_username}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow bg-base-100 stats overflow-y-auto">
          <div className="stat">
            <div className="stat-figure text-secodary">
              <FontAwesomeIcon icon={faUsers} className="text-3xl" />
            </div>
            <div className="stat-title pr-5 text-xl font-medium">followers</div>
            <div className="stat-value font-inter mt-1 pr-5 text-2xl md:text-3xl">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secodary">
              <FontAwesomeIcon icon={faUserCheck} className="text-3xl" />
            </div>
            <div className="stat-title pr-5 text-xl font-medium">following</div>
            <div className="stat-value font-inter mt-1 pr-5 text-2xl md:text-3xl">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secodary">
              <FontAwesomeIcon icon={faChartLine} className="text-3xl" />
            </div>
            <div className="stat-title pr-5 text-xl font-medium">
              Public repos
            </div>
            <div className="stat-value font-inter mt-1 pr-5 text-2xl md:text-3xl">
              {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secodary">
              <FontAwesomeIcon icon={faBoxOpen} className="text-3xl" />
            </div>
            <div className="stat-title pr-5 text-xl font-medium">
              Public gists
            </div>
            <div className="stat-value font-inter mt-1 pr-5 text-2xl md:text-3xl">
              {public_gists}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
