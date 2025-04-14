import { useRef } from "react";
import MyInput from "./MyInput";

// useImperativeHandle để tuỳ chỉnh những gì com cha có thể truyền qua ref
// forwardRef được sử dụng để truyền ref từ com cha vào function component
// useRef tạo biến tham chiếu ref, chỉ được sử dụng với DOM component và class component

// Mở API từ con cho cha gọi

export default function ImperativeHandle() {
    const inputRef = useRef(null);
    return (
        <div>
            <h1 className="text-3xl font-bold">useImperativeHandle</h1>
            <MyInput ref={inputRef} />
            <div className="flex m-2">
                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
                        onClick={() => inputRef.current?.focus()}>Focus</button>
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
                        onClick={() => inputRef.current?.clear()}>Clear</button>
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
                        onClick={() => alert(inputRef.current?.getValue())}>getValue</button>
            </div>
        </div>
    )
}