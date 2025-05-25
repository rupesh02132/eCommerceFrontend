import React from 'react';

const AuthAddress = ({ AuthAddr }) => {
  // if (!address) return <div>No address available</div>;

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2"> Address</h2>
      <p>{AuthAddr?.firstname} {AuthAddr?.lastname}</p>
      <p> {AuthAddr?.mobile}</p>
      <p> {AuthAddr?.streetAddress}</p>
      <p> {AuthAddr?.city}</p>
      <p> {AuthAddr?.state}</p>
      <p> {AuthAddr?.zipcode}</p>
      <p> {AuthAddr?.country}</p>
      
    </div>
  );
};

export default AuthAddress;