import React, {useState, useEffect} from "react";

const Counter = () => {
    const [count, setCounter] = useState(0);

    useEffect(() => {

    }, []);

    return (
        <div>
            <div>Anzahl Scharf: {count}</div>
            <button onClick={() => setCounter(count + 1)}>Add Scharf</button>
        </div>
    );
}

export default Counter;