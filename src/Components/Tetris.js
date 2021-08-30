import React, { useState } from 'react'
import Stage from './Stage'
import Display  from './Display'
import StartButton from './StartButton'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'
import { Navigation } from '../Components/styles/StyledMain'
import { createStage, checkCollision } from '../gameHelper'
import { useBlock } from '../Hooks/useBlock'
import { useStage } from '../Hooks/useStage'
import { useInterval } from '../Hooks/useInterval'
import { useGameStatus } from '../Hooks/useGameStatus'

const Tetris = () => {
    document.title = 'Play Tetris'

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [block, updateBlockPos, resetBlock, blockRotate] = useBlock();
    const [stage, setStage, rowsCleared] = useStage(block, resetBlock);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    console.log('re-render');

    const moveBlock = (dir) => {
        if (!checkCollision(block, stage, { x: dir, y: 0 })) {
            updateBlockPos({ x: dir, y: 0 });
        }
    }

    const startGame = () => {
       setStage(createStage());
       setDropTime(1000);
       resetBlock();
       setGameOver(false);
       setScore(0);
       setLevel(0);
       setRows(0);
    }

    const drop = () => {
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);

            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(block, stage, { x: 0, y: 1})) {
            updateBlockPos({ x: 0, y: 1, collided: false })
        } else {
            if (block.pos.y < 1) {
                console.log("GAME OVER.");
                setGameOver(true);
                setDropTime(null);
            }
            updateBlockPos({ x: 0, y: 0, collided: true })
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    const dropBlock = () => {
        setDropTime(null);
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                moveBlock(-1)
            } else if (keyCode === 39) {
                moveBlock(1)
            } else if (keyCode === 40) {
                dropBlock()
            } else if (keyCode === 38) {
                blockRotate(stage, 1)
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Navigation>
                    <a id='return' href='/'>Return To Homepage</a>
                </Navigation>
                <Stage stage={stage}/>
                    <aside>
                        {gameOver ? (
                            <Display gameOver={gameOver} text="Game Over"/>
                        ) : (
                            <div>
                                <Display text={`Score: ${score}`}/>
                                <Display text={`Rows: ${rows}`}/>
                                <Display text={`Level: ${level}`}/>
                            </div>
                            )}
                        <StartButton callback={startGame}/>
                    </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris
