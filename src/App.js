import Component1 from './components/Component1';
import { useDispatch } from 'react-redux';
import { increment } from './redux/numberSlice';

export default function App() {
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <button onClick={() => dispatch(increment())}>INCREASE NUMBER</button>
      <Component1 />
    </div>
  );
}
