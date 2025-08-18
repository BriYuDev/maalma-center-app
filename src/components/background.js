"use client";

import { useRef, useEffect } from "react";

const Squares = ({ borderColor = "#eee", squareSize = 50 }) => {
    const canvasRef = useRef(null);
    const requestRef = useRef(null);
    const numSquaresX = useRef(0);
    const numSquaresY = useRef(0);
    const gridOffset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const drawGrid = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const startX =
                Math.floor(gridOffset.current.x / squareSize) * squareSize;
            const startY =
                Math.floor(gridOffset.current.y / squareSize) * squareSize;

            for (
                let x = startX;
                x < canvas.width + squareSize;
                x += squareSize
            ) {
                for (
                    let y = startY;
                    y < canvas.height + squareSize;
                    y += squareSize
                ) {
                    const squareX = x - (gridOffset.current.x % squareSize);
                    const squareY = y - (gridOffset.current.y % squareSize);

                    ctx.strokeStyle = borderColor;
                    ctx.strokeRect(squareX, squareY, squareSize, squareSize);
                }
            }
        };

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;

            drawGrid();
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [borderColor, squareSize]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 -z-10 w-full h-full border-none block"
        ></canvas>
    );
};

export default Squares;
