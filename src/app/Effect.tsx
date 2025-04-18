import axios from "axios";
import { useEffect, useState } from "react"

// useEffect xử lí side effect (tác vụ phụ)

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default function Effect() {
    const [data, setData] = useState<Post[]>([])
    const [isAPI, setIsAPI] = useState(false)
    const [show, setShow] = useState(true)
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Goi API");
        axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setData(res.data))
            .catch(err => console.log("Err: ", err))
    }, []) // Chạy một lần khi component mount

    useEffect(() => {
        document.title = `Click lần ${count}`
        console.log("Update title: ", document.title);
    }, [count]) // Chỉ chạy lại khi count thay đổi

    return (
        <div>
            <h1 className="text-3xl font-bold">useEffect</h1>
            <ul className="list-disc list-inside">
                <li>
                    {isAPI ? (
                        <>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-full px-5 text-center me-2" 
                                onClick={() => setIsAPI(false)}>Goi API</button>
                            {data.length > 0 ? (
                                <ul className="list-decimal list-inside ps-5">
                                    {data.slice(0, 5).map(post => (
                                        <li key={post.id}>{post.title}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </>
                        ) : (
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 rounded-full px-5 text-center me-2"
                            onClick={() => {setIsAPI(true)}}>Goi API</button>
                    )}
                </li>
                <li>
                    <button
                        className= "text-white bg-red-700 hover:bg-red-800 rounded-full px-5 text-center me-2"
                        onClick = { () => { 
                            setCount(count+1) 
                        }}>
                    Cập nhật DOM</button>
                </li>
                <li>

                    {/* Cleanup để gỡ bỏ component không cần thiết, tránh rò rỉ bộ nhớ, gây lỗi và làm app bị chậm */}
                    
                    <button
                        onClick={() => setShow(!show)}
                        className="text-white bg-yellow-400 hover:bg-yellow-500 rounded-full px-5 text-center me-2">
                        {show ? "Ẩn WindowSize" : "Hiện WindowSize"}
                    </button> 
                    {show && <WindowSize/>} 
                </li>
            </ul>
        </div>
    )
}

function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const evResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", evResize)
        return () => {
            window.removeEventListener("resize", evResize)
            console.log("Cleanup");
        }
    }, [])
    return <p>Width: {width}</p>
}