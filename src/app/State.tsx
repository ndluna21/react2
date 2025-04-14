import { useState } from "react"

// Bộ nhớ tạm trong component

export default function State(){
    const [count, setCount] = useState(0)
    console.log("Renders");
    return (
        <div>
            <h1 className="text-3xl font-bold">useState</h1>
            <p>Count: {count}</p>
            <button 
                type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" 
                onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}