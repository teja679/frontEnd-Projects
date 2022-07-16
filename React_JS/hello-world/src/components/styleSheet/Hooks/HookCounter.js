import React, { useState } from 'react'

function HookCounter() {
   const [count, setCount] = useState(10)

//    incrementCounter = () => {

//    }
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter