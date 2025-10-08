import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import ShowDetails from "../showDetails/ShowDetails";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const [showInfo, setShowInfo] = useState(false);

  // fatching the data 
  const detailsPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

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
        {/* buttton  */}
        <div>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="btn bg-gray-900 font-bold rounded py-2 px-4 mt-9 text-white"
          >
            {showInfo ? "Hide" : "Show"} Details Here
          </button>
          {showInfo && (
            <Suspense fallback={<span>Loading ...</span>}>
              <ShowDetails detailsPromise={detailsPromise}></ShowDetails>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
