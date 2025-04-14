interface HeaderProps{
    activeTab: string,
    setActiveTab: (tab: string) => void
}

export default function Headers({activeTab, setActiveTab}: Readonly<HeaderProps>) {
    return (
        <div>
            <button
                className={`px-4 py-2 ${activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab1")}>useState</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab2")}>useReducer</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab3" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab3")}>useEffect</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab4" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab4")}>useRef</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab5" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab5")}>useLayoutEffect</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab6" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab6")}>useContext</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab7" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab7")}>useImperativeHandle</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab8" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab8")}>useMemo</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab9" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab9")}>useCallback</button>
            <button
                className={`px-4 py-2 ${activeTab === "tab10" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab("tab10")}>React19</button>
        </div>
    )
}