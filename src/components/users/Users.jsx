import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users)

  return (
    <div>
      <h2 className="text-2xl font-bold">This is users data </h2>
    </div>
  );
};

export default Users;
