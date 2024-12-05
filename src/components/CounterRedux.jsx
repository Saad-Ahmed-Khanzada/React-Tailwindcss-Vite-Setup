import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/slices/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
      </div>
      <div className="flex flex-col items-center mt-4 space-y-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border rounded px-2 py-1"
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment by {amount}
        </button>
      </div>
    </div>
  );
}

export default Counter;
