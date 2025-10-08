import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div>
      <div className="border rounded-2xl p-4 m-3">
        <h1>{name}</h1>
        <h5>Email: {email}</h5>
        <p>{phone}</p>
        <Link to={`/users/${id}`}>
          <button className="btn bg-amber-600 text-black font-bold rounded py-2 px-4">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default User;
