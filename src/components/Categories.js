import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.categories);
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <h1>Categories</h1>
      <button type="button" onClick={handleCheckStatus}>Check Status</button>
      <h2>{selector}</h2>
    </div>
  );
};

export default Categories;
