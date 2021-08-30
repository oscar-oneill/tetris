import { useState, useEffect } from 'react'
import { createStage } from '../gameHelper'

export const useStage = (block, resetBlock) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        setRowsCleared(0);
        const sweepRows = newStage => 
            newStage.reduce((ack, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
                    return ack;
                }
                ack.push(row);
                return ack;
            }, [])

        const updateStage = prevStage => {
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );

            block.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + block.pos.y][x + block.pos.x] = [
                            value,
                            `${block.collided ? 'merged' : 'clear'}`
                        ];
                    }
                });
            });

            if (block.collided) {
                resetBlock();
                return sweepRows(newStage);
            }

            return newStage;
        }

        setStage(prev => updateStage(prev));

    }, [block.collided, block.pos.x, block.pos.y, block.tetromino, resetBlock]);

    return [stage, setStage, rowsCleared];
}