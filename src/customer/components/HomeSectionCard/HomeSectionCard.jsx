import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ prop }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${prop._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[12rem] mx-3.5 hover:shadow-xl transition-shadow'
    >
      <div className='h-[15rem] w-[10rem]'>
        <img className='object-cover object-top w-full px-3 h-full' src={prop.imageUrl} alt={prop.title} />
      </div>
      <div className='p-4 text-center'>
        <h3 className='text-lg font-medium text-gray-700'>{prop.brand}</h3>
        <p className='mt-2 text-sm font-medium text-gray-900 line-clamp-2'>{prop.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
