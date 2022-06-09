import React from 'react';
import { useSelector } from 'react-redux';

export default function Component3() {
  const count = useSelector((state) => state.number.value);
  return <p>No prop drilling, here is the count: {count}</p>;
}
