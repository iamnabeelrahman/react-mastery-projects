import React, { useEffect } from 'react'

function BasicEffect() {
  const [counter, setCounter] = React.useState(0);
    document.title = "My counter app";

  function CounterEfect(num: number) {
    
    setCounter(num);
  }
  useEffect(() => {
    document.title = 'Counter -' + counter;
  }, [counter])

  return (
    <button onClick={() => CounterEfect(counter + 1)}>BasicEffect</button>
  )
}

export default BasicEffect