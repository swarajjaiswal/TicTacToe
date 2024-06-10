import React from 'react';
import { useState } from 'react';
import Square from './Square';

const Board = () => {
    const initialState = Array(9).fill(null);
    const [position, setPosition] = useState(initialState);
    const [firstTurn, setFirstTurn] = useState(true);

    const gameWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const logic of winner) {
            const [a, b, c] = logic;
            if (position[a] && position[a] === position[b] && position[a] === position[c]) {
                return position[a];
            }
        }
        return false;
    };

    const isWinner = gameWinner();

    const isDraw = !isWinner && position.every(square => square !== null);

    const handleClick = (index) => {
        if (position[index] !== null || isWinner || isDraw) {
            return;
        }
        const newPos = [...position];
        newPos[index] = firstTurn ? 'X' : 'O';
        setPosition(newPos);
        setFirstTurn(!firstTurn);
    };

    const playAgain = () => {
        setPosition(initialState);
        setFirstTurn(true);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('https://imgs.search.brave.com/G6Om4p8kg-_zE4dCcQ23gvl7VAN3-rQI5a19az4d5e0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/Njc4NzM1L3Bob3Rv/L21ldGFsLXRpYy10/YWMtdG9lLWdhbWUt/cGllY2VzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1QYUhf/UEMzMWVTa3lSU053/SUdUYkhvOF8yclJC/TWVCLXdPNDExU1Fh/bzBFPQ')" }}>
            <h1 className='text-6xl font-extrabold text-black mb-10'>TIC TAC TOE</h1>

            <div className="board w-80 p-8 bg-white rounded-lg shadow-2xl">
                {isWinner ? (
                    <div className="bg-green-500 p-5 flex flex-col items-center rounded-lg">
                        <div className="text-4xl font-bold text-center text-white mb-4">Player {isWinner} won!</div>
                        <button onClick={playAgain} className="bg-blue-700 text-white p-3 rounded-lg shadow-lg transition transform hover:scale-105 mt-4">Play Again</button>
                    </div>
                ) : isDraw ? (
                    <div className="bg-green-500 p-5 flex flex-col items-center rounded-lg">
                        <div className="text-4xl font-bold text-center text-white mb-4">Match Draw!</div>
                        <button onClick={playAgain} className="bg-blue-700 text-white p-3 rounded-lg shadow-lg transition transform hover:scale-105 mt-4">Play Again</button>
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-center text-black mb-6">Player {firstTurn ? 'X' : 'O'}'s Turn</h1>
                        <div className="grid grid-cols-3 gap-4">
                            <Square onClick={() => handleClick(0)} value={position[0]} />
                            <Square onClick={() => handleClick(1)} value={position[1]} />
                            <Square onClick={() => handleClick(2)} value={position[2]} />
                            <Square onClick={() => handleClick(3)} value={position[3]} />
                            <Square onClick={() => handleClick(4)} value={position[4]} />
                            <Square onClick={() => handleClick(5)} value={position[5]} />
                            <Square onClick={() => handleClick(6)} value={position[6]} />
                            <Square onClick={() => handleClick(7)} value={position[7]} />
                            <Square onClick={() => handleClick(8)} value={position[8]} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Board;
