import { useReducer } from "react";

const initCount = {count: 0}
const reducer = (state: { count: number; }, action: { type: unknown; }) => {
    switch (action.type) {
        case "tang":
            return {count: state.count + 1}
        case "giam":
            return {count: state.count - 1}
        case "reset":
            return initCount
        default:
            return state;
    }
}

// useReducer tương tự như useState, nhưng nó phù hợp với state phức tạp, có nhiều logic cập nhật
// useReducer quan trọng vì nó giúp tổ chức code tốt hơn, dễ mở rộng và tối ưu hiệu suất

// Thay thế useState khi logic phức tạp

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, initCount)
    return (
        <div>
            <h1 className="text-3xl font-bold">useReducer</h1>
            <p className="text-xl">Count: {state.count}</p>
            <button className="px-4 py-2 bg-blue-500 text-white mx-2" onClick={() => dispatch({type: "tang"})}> + </button>
            <button className="px-4 py-2 bg-blue-500 text-white mx-2" onClick={() => dispatch({type: "giam"})}> - </button>
            <button className="px-4 py-2 bg-blue-500 text-white mx-2" onClick={() => dispatch({type: "reset"})}> Reset</button>
        </div>
    )
}