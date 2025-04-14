import { useEffect, useRef, useState } from "react"

// Tạo một tham chiếu đến một phần tử DOM hoặc giữ lại một giá trị mà không gây re-render khi giá trị thay đổi

// Như biến toàn cục trong component

export default function Ref() {
    const inputRef = useRef(null!);

    const prevInp = useRef(0)
    
    const [count, setCount] = useState(0);
    const prevCount = useRef<number | null>(null)
    
    const handleClick = () => {
        (inputRef.current as HTMLInputElement).focus();
    }

    useEffect(() => {
        prevCount.current = count
    }, [count])
    
    useEffect(() => {
        prevInp.current += 1;
    })
    console.log("Render"); // Đặt ngoài useEffect sẽ render 2 lần do TS tự bật reactStrictMode

    return (
        <div>
            <h1 className="text-3xl font-bold">useRef</h1>
            <div>
                <input type="text" placeholder="Nhập gì đó..." ref={inputRef} />
                <button 
                    className="text-white bg-blue-700 hover:bg-blue-800 rounded-full px-5 text-center me-2" 
                    onClick={handleClick}>Focus input</button>
            </div>

            {/* Giữ lại giá trị giữa các lần render mà không bị reset */}
            <div>
                <p>Component render {prevInp.current} lần</p>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 rounded-full px-5 text-center me-2"
                    onClick={handleClick}>Click</button>
            </div>

            {/* Giữ lại giá trị qua các lần render mà không bị re-render */}
            <div>
                <p>Giá trị hiện tại: {count}</p>
                <p>Giá trị trước đó: {prevCount.current}</p>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 rounded-full px-5 text-center me-2"
                    onClick={() => setCount(count + 1)}>Tăng state</button>
            </div>
        </div>
    )
}