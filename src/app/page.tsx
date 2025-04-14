"use client"

import { useState } from "react";
import Headers from "./Header";
import Container from "./Container";
import "./globals.css"


export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1")
  return (
    <div>
      <Headers activeTab={activeTab} setActiveTab={setActiveTab} />
      <Container activeTab={activeTab} />
    </div>
  );
}
