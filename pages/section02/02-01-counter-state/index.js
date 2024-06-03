import { useState } from 'react';

export default function CounterStatePage() {
    const [count, setCount] = useState(0);
    function countUp() {
        setCount(count + 1);
    }

    function countDown() {
        setCount(count - 1);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={countUp}>카운트 업</button>
            <button onClick={countDown}>카운트 다운</button>
        </>
    );
}
