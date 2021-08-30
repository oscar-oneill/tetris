import styled from 'styled-components'

export const StyledDisplay = styled.div`
    diaplay: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #333;

    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-family: 'Press Start 2P';
    font-size: 0.75rem;
`;