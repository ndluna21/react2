import { useMemo, useState } from "react";

// useMemo giúp ghi nhớ giá trị được tính toán, chỉ tính lại khi dep thay đổi

// Ghi nhớ giá trị

export default function Memo() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(false);

    const exVal = useMemo(() => {
        console.log("Tinh lai");
        let total = 0;
        for (let i = 0; i < 1e7; i++) {
            total += i;
        }
        return total + count
    }, [count])



    return(
        <div>
            <h1 className="text-3xl font-bold">useMemo</h1>
            <p>Giá trị tính toán: {exVal}</p>
            <p>Other State: {other ? "TRUE" : "FALSE"}</p>
            <button onClick={() => setCount((c) => c + 1)}>Up count</button>
            <button onClick={() => setOther((o)=> !o)}>Toggle Other State</button>
        </div>
    )
}