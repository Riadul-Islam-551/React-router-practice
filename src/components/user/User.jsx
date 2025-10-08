import React from "react";
import { Link, useNavigate } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/users/${id}`);
  };

  return (
    <div>
      <div className="border rounded-2xl p-4 m-3">
        <h1>{name}</h1>
        <h5>Email: {email}</h5>
        <p>{phone}</p>
        {/* button  */}
        <Link to={`/users/${id}`}>
          <button className="btn bg-amber-600 text-black font-bold rounded py-2 px-4 mr-3">
            Show Details
          </button>
        </Link>
        {/* button using useNavigate Hook  */}
        <button
          onClick={handleNavigation}
          className="btn bg-amber-600 text-black font-bold rounded py-2 px-4"
        >{`Show Details ${id}`}</button>
      </div>
    </div>
  );
};

export default User;
