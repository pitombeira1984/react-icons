import React from "react";

export default function IconTable({ title, icons }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>🔹 {title}</h2>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Ícone</th>
            <th>Nome</th>
            <th>Importação</th>
          </tr>
        </thead>
        <tbody>
          {icons.map((item, i) => (
            <tr key={i}>
              <td style={{ fontSize: "24px", textAlign: "center" }}>{item.icon}</td>
              <td>{item.name}</td>
              <td>
                <code>{item.import}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
