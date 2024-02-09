import React from "react";
import "../styles/Cell.css";

interface CellProps {
    value: "R" | "Y" | null; // R para Roja, Y para Amarilla, null para vacía
    onClick: () => void; // Función que se llama cuando se hace clic en la celda
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
    return (
        <div className="cell" onClick={onClick}>
            {value && (
                <div
                    className={`chip ${value === "R" ? "blue" : "white"}`}
                ></div>
            )}
        </div>
    );
};

export default Cell;
