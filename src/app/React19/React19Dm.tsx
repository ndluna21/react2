interface React19Props {
    active2: string
    setActive2: (tab: string) => void
}

export default function React19Dm({active2, setActive2}: Readonly<React19Props>) {
    return (
        <div>
            <button
                className={`px-4 py-2 ${active2 === "tab1" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActive2("tab1")}>Form Action</button>
            <button
                className={`px-4 py-2 ${active2 === "tab2" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActive2("tab2")}>useActionState</button>
            <button
                className={`px-4 py-2 ${active2 === "tab3" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActive2("tab3")}>useFormStatus</button>
            <button
                className={`px-4 py-2 ${active2 === "tab4" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActive2("tab4")}>useOptimistic</button>
        </div>
    )
}