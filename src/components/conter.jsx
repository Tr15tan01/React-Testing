import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1)
        console.log('decrement')
    }

    const handleReset = () => {
        setCount(0)
    }

    return (<div className="App">
        {/* <NavBar /> */}
        <header className="App-header">
            <h3>Counter Component</h3>

            <h3 data-testid="count">{count}</h3>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </header>
    </div>)
}

export default Counter;