import { useEffect, useLayoutEffect, useState } from "react"

// useLayoutEffect tương tự như useEffect nhưng khác nhau ở chỗ
// useEffect sẽ Render UI trước rồi mới gọi callback, useLayoutEffect thì gọi callback trước rồi mới render UI
// useLayoutEffect cũng đồng bộ với render: callback sẽ chạy ngay sau khi DOM được cập nhật nhưng trước khi vẽ lại UI

export default function LayoutEffect() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useLayoutEffect(() => {
        if (count > 3){
            setCount(0)
        }
    }, [count])
    useEffect(() => {
        if (count1 > 3){
            setCount1(0)
        }
    }, [count1])
    return (
        <div>
            <h1 className="text-3xl font-bold">useLayoutEffect</h1>
            <div>
                <p>{ count }</p>
                <button onClick={() => setCount(count+1)}>Tăng</button>
            </div>
            <div>
                <p>{ count1 }</p>
                <button onClick={() => setCount1(count1 + 1)}>Tăng Effect</button>
            </div>
        </div>
    )
}