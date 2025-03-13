import { useState } from "react";

export function Counter() {
    console.log("Counter component executed");

    // let count = 0;
    const [count, setCount] = useState(0);

    function incrementCount() {
        // count++;
        // console.log('count', count);
        setCount(count + 1);
    }

    return <>
    <p>Count: {count}</p>
    <button onClick={incrementCount}>Increment</button>
    </>
}