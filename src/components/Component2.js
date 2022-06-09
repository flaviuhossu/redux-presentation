import React, { useEffect } from 'react';
import Component3 from './Component3';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/postsSlice';

export default function Component2() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <Component3 />;
}
