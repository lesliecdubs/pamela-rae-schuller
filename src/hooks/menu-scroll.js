import React, { useState } from 'react'

export default function MenuScroll() {
  // Declare a new state variable, which we'll call "count"
  const [isTop, setIsTop] = useState(true)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
