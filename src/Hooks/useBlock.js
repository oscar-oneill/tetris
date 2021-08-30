import { useCallback, useState } from 'react'
import { TETROMINOS, randomTetromino } from '../tetrominos'
import { STAGE_WIDTH, checkCollision } from '../gameHelper'

export const useBlock = () => {
    const [block, setBlock] = useState({
        pos: { x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false
    }); 

    const rotate = (matrix, dir) => {
        const rotatedTetro = matrix.map((_, index) => 
            matrix.map(col => col[index]),
        );

        if (dir > 0) return rotatedTetro.map(row => row.reverse());
        return rotatedTetro.reverse();
    }

    const blockRotate = (stage, dir) => {
        const clonedBlock = JSON.parse(JSON.stringify(block));
        clonedBlock.tetromino = rotate(clonedBlock.tetromino, dir);

        const pos = clonedBlock.pos.x;
        let offset = 1;
        while(checkCollision(clonedBlock, stage, { x: 0, y: 0 })) {
            clonedBlock.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedBlock.tetromino[0].length) {
                rotate(clonedBlock.tetromino, -dir);
                clonedBlock.pos.x = pos;
                return;
            }
        }
        setBlock(clonedBlock);
    }

    const updateBlockPos = ({ x, y, collided }) => {
        setBlock(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }

    const resetBlock = useCallback(() => {
        setBlock({ 
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false
        })
    }, [])
    
    return [block, updateBlockPos, resetBlock, blockRotate];
}