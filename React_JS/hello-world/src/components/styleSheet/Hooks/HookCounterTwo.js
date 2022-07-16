import React, { useState } from 'react'

function HookCounterTwo() {

    const [ count, setCount ] = useState(0)

    const incrementFive = () => {
        setCount(prevCount => prevCount + 5)
    } 

  return (
    <div>
        Count : {count}
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button> <br />
        <button onClick={() => setCount(count - 1)}>Decrement</button> <br />
        <button onClick={incrementFive}>IncrementFive</button>
    </div>
  )
}

export default HookCounterTwo