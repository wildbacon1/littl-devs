import React, { useState } from "react";
import Cell from "./Cell";
import "../styles/Board.css";

interface BoardProps {
    currentPlayer: "R" | "Y";
    togglePlayer: () => void;
}

const Board: React.FC<BoardProps> = ({ currentPlayer, togglePlayer }) => {
    const [board, setBoard] = useState<(null | "R" | "Y")[][]>(
        Array(6).fill(Array(7).fill(null))
    );

    const handleClick = (colIndex: number) => {
        // Encuentra la fila más baja disponible en la columna seleccionada
        let placed = false; // Añade una bandera para verificar si se colocó una ficha
        const newRow = board.map((row) => [...row]); // Corrige la forma de copiar el array para evitar referencias cruzadas

        for (let row = 5; row >= 0 && !placed; row--) {
            if (newRow[row][colIndex] === null) {
                newRow[row][colIndex] = currentPlayer; // Usa el jugador actual
                placed = true; // Marca que se ha colocado una ficha
            }
        }

        if (placed) {
            setBoard(newRow);
            togglePlayer(); // Cambia al otro jugador después de colocar una ficha
        }
    };

    return (
        <div className="board">
            {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <Cell
                        key={`${rowIndex}-${colIndex}`}
                        value={cell}
                        onClick={() => handleClick(colIndex)}
                    />
                ))
            )}
        </div>
    );
};

export default Board;
