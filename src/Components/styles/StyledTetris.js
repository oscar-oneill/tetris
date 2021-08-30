import styled from 'styled-components'
import bgImage from '../../photos/alexander-andrews-oMYSo7wYZ3o-unsplash.jpg'

export const StyledTetrisWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
    outline: none;
`;

export const StyledTetris = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 230px;
        display: block;
        padding: 0 20px;
        text-align: center;
    }
`;