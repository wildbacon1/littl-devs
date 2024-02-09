import React, { useState } from "react";
import Board from "./Board";

const Game: React.FC = () => {
    const [currentPlayer, setCurrentPlayer] = useState<"R" | "Y">("R");

    const togglePlayer = () => {
        setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
    };

    // Pasar `currentPlayer` y `togglePlayer` a `Board` como props
    return (
        <div className="game">
            <Board currentPlayer={currentPlayer} togglePlayer={togglePlayer} />
        </div>
    );
};

export default Game;
