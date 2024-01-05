import { useState } from 'react';
import './App.css';

function CounterButton({onClick, text}) {
  return (
    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-[.75rem] py-[.375rem] me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 tracking-[.25rem] uppercase' onClick={onClick}>{text}</button>
  )
}

export default function App() {  
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  const name = count > 0 ? <span style={{color: "green"}}>{count}</span> : count === 0 ? <span style={{color: "black"}}>{count}</span>  :
    <span style={{ color: 'red' }}>
      {count}
    </span>;

  return (

    <>
      <main className='grid min-h-screen place-items-center'>
        <div>
          <h1 className='text-[4rem] font-extrabold dark:text-white tracking-[.25rem] capitalize'>counter</h1>
          <h4 className='text-[6rem]/[1.5] font-extrabold dark:text-white capitalize'>{name}</h4>
          <div>
            <CounterButton onClick={decreaseCount} text="decrease"/>
            <CounterButton onClick={resetCount} text="reset"/>
            <CounterButton onClick={increaseCount} text="increase"/>
          </div>
        </div>
      </main>
    </>
  );
}