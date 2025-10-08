import React, { use } from "react";

const ShowDetails = ({ detailsPromise }) => {
  const detailsData = use(detailsPromise);
  console.log(detailsData);
  const { username, website } = detailsData;
  return (
    <div>
      <h1>Username : {username}</h1>
      <p>Website : {website}</p>
    </div>
  );
};

export default ShowDetails;
