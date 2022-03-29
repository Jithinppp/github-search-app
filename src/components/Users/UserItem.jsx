import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card drop-shadow-md compact bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="profile-avatar" />
            </div>
          </div>
        </div>
        <div>
          <p className="card-title font-pop font-medium text-base">{login}</p>
          <Link className="font-normal text-xs" to={`/user/${login}`}>
            visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
