import React, { useState, useContext } from "react";
import AlertContext from "../../context/alerts/AlertContext";
import GithubContext from "../../context/github/GithubContext";

function UsersSearch() {
  const [text, settText] = useState("");
  const { users, searchUsers, clearSearch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    settText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter something", "error");
    } else {
      searchUsers(text);
      settText("");
    }
  };

  return (
    <div className="font-pop grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-10">
      <div>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="w-full input input-bordered input-md black text-base "
              placeholder="search github profiles"
              value={text}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none btn  btn-md w-14 md:w-30 xl:w-1/4"
            >
              go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearSearch} className="btn btn-ghost w-36 ">
            clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UsersSearch;
