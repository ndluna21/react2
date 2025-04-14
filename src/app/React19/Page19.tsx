"use client"

import { useState } from "react"
import React19Dm from "./React19Dm"
import Container19 from "./Container19"
// import "./globals.css"

export default function Page19() {
    const [active2, setActive2] = useState("tab1")
    return (
        <>
            <React19Dm active2={active2} setActive2={setActive2} />
            <Container19 active2={active2} />
        </>
    )
}