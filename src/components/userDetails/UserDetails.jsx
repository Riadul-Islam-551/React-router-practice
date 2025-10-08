import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, website } = userDetails;

  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>User Details</h1>
      <div className="border border-amber-600 mt-5 p-5 rounded-2xl">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>{website}</p>
        <button onClick={handleBackNavigation} className="py-2 px-5 rounded-xl bg-amber-600 text-black font-bold mt-5">Go Back</button>
      </div>
    </div>
  );
};

export default UserDetails;
