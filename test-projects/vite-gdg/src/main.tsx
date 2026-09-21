import React from "react";
import { createRoot } from "react-dom/client";
import { DataEditor, type DataEditorProps } from "@glideapps/glide-data-grid";
import { styled } from "@linaria/react";

const Shell = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    font-family: system-ui, sans-serif;
`;

const Header = styled.h1`
    font-size: 18px;
    font-weight: 600;
    margin: 0;
`;

const StatusBadge = styled.span`
    align-self: flex-start;
    padding: 4px 10px;
    border-radius: 6px;
    background: #e7f5ee;
    color: #0b6e4f;
    font-size: 13px;
`;

const columns: DataEditorProps["columns"] = [
    { title: "Name", width: 180 },
    { title: "Region", width: 140 },
    { title: "Units", width: 100 },
];

const rows = [
    ["Aurora", "us-east", 120],
    ["Borealis", "eu-west", 87],
    ["Cinder", "us-west", 54],
    ["Drift", "ap-south", 33],
];

function App() {
    return (
        <Shell>
            <Header>glide-data-grid — source-consumed via Vite</Header>
            <StatusBadge>vite-gdg harness</StatusBadge>
            <div style={{ width: 480, height: 240 }}>
                <DataEditor
                    columns={columns}
                    rows={rows.length}
                    getCellContent={cell => {
                        const [col, row] = cell;
                        const value = rows[row]?.[col];
                        return {
                            kind: value === undefined || typeof value === "number" ? "number" : "text",
                            data: value ?? "",
                            allowOverlay: false,
                            displayData: value === undefined ? "" : String(value),
                        };
                    }}
                    smoothScrollX
                    smoothScrollY
                />
            </div>
        </Shell>
    );
}

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
