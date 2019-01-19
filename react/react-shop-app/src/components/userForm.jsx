import React from "react";

const UserForm = ({ match, history }) => {
  return (
    <div>
      <h1>User Form - {match.params.name}</h1>
      <button
        className="btn btn-success m-2"
        onClick={() => history.push("/users")}
      >
        Save
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => history.push("/users")}
      >
        Delete
      </button>
    </div>
  );
};

export default UserForm;
