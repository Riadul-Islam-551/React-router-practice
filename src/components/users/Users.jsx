import React from "react";
import { useLoaderData } from "react-router";
import User from "../user/User";

const Users = () => {
  const users = useLoaderData();
  console.log(users)

  return (
    <div>
      <h2 className="text-2xl font-bold">This is users data </h2>
      {
        users.map(user => <User key={user.id} user={user}></User>)
      }
    </div>
  );
};

export default Users;
