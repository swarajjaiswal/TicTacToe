import React from 'react';

const Square = ({ onClick, value }) => {
    return (
        <button
            className="w-20 h-20 bg-gray-200 flex justify-center items-center text-3xl font-bold text-gray-800 border-4 border-gray-400 rounded-lg hover:bg-gray-300 transition duration-200 ease-in-out transform hover:scale-105"
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
