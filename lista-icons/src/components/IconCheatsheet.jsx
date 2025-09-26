import React from "react";
import { iconsData } from "../data/iconsData";
import IconTable from "./IconTable";

export default function IconCheatsheet() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Cheatsheet de Ícones (react-icons)</h1>
      {iconsData.map((section, index) => (
        <IconTable key={index} title={section.title} icons={section.icons} />
      ))}
    </div>
  );
}

