import React from "react";

const User = ({ user }) => {
  const { name, email, phone } = user;

  return (
    <div>
      <div className="border rounded-2xl p-4 m-3">
        <h1>{name}</h1>
        <h5>Email: {email}</h5>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default User;
