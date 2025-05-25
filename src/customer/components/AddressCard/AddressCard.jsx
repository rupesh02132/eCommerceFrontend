import React from 'react';

const AddressCard = ({ shipAddress }) => {
  // if (!address) return <div>No address available</div>;

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Shipping Address</h2>
      <p>{shipAddress?.firstname} {shipAddress?.lastname}</p>
      <p> {shipAddress?.mobile}</p>
      <p> {shipAddress?.streetAddress}</p>
      <p> {shipAddress?.city}</p>
      <p> {shipAddress?.state}</p>
      <p> {shipAddress?.zipcode}</p>
      <p> {shipAddress?.country}</p>
    </div>
  );
};

export default AddressCard;
