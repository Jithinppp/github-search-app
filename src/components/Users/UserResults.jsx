import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../Layouts/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const { loading, users } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-7 xl:grid-cols-4 lg:grid-cols-3 md:id-cols-2 ">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
