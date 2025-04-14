/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react"
import Child from "./Child";

// useCallback không tạo lại hàm mới mỗi lần component re-render, chỉ tạo lại hàm mới khi dependency thay đổi

// Ghi nhớ function

export default function Callback() {
    const [count, setCount] = useState(0)
    const [other, setOther] = useState(false)

    const handleClick = useCallback(() => {
        console.log("Click! Count: ", count);
    }, []) 
    return (
        <div>
            <h1 className="text-3xl font-bold">useCallback</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Tăng Count</button>
            <button onClick={() => setOther(o => !o)}>Toggle Other State</button>
            <Child onClick={handleClick} />
        </div>
    )
}