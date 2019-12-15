import React, { useState, useEffect } from 'react';

const API_URL: string = 'http://localhost:8000/api';

let originalTitle: string;

const Counter: React.FC = () => {
  const [count, setCount] = useState();

  /* Occurs when component is initially created. */
  useEffect(() => {
    originalTitle = document.title;
    fetch(API_URL + '/counter')
      .then(res => res.json())
      .then(({ count }) => setCount(count));
  }, []);

  /* Occurs when component is created as well as whenever it is changed. */
  useEffect(() => {
    if (count > 0) {
      document.title = `You clicked ${count} times | ${originalTitle}`;
    }
  });

  function increment() {
    let body = JSON.stringify({
      'count': count + 1
    });
    fetch(API_URL + '/counter', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body
    })
      .then(res => res.json())
      .then(({ count }) => setCount(count));
  }

  function reset() {
    fetch(API_URL + '/counter', { method: 'delete' })
      .then(() => setCount(0));
  }

  return (
    <div>
      <h2>Counter</h2>
      {count === undefined
        ? <p>Loading...</p>
        : <>
          <p>You clicked {count} times</p>
          <button onClick={increment}>
            Click me
        </button>
          <button onClick={reset}>
            Reset counter
        </button>
        </>
      }
    </div>
  );
}

export default Counter;
