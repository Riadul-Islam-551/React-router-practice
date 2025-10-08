import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const userDetails = useLoaderData();
   const {name, website} = userDetails

  return (
    <div>
      <h1>User Details</h1>
      <h3>{name}</h3>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
