import styled from 'styled-components'
import imageA from '../../photos/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg'
import imageB from '../../photos/anas-alshanti-feXpdV001o4-unsplash.jpg'

export const BodyLayer = styled.div`
    height: 400px;
    width: 100vw;
    display: flex;
    align-items: center;
    background: black;

    @media screen and (max-width: 600px) {
        {
            flex-direction: column;
            height: 100vh;
            width: 100vw;
        }
    }
`;

export const PrimaryText = styled.div`
    background: #000;
    color: #fff;
    font-family: 'Akkurat';
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    width: 50%;

    h1 {
        color: orchid;
        font-family: 'JetBrains Mono Bold';
        letter-spacing: -1px;
    }

    span {
        font-size: 14.5px;
    }

    @media screen and (max-width: 600px) {
        {
            height: 50%;
            width: 100%;
        }
    }
`;

export const PrimaryImage = styled.div`
    background-image: url(${imageA});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 50%;

    @media screen and (max-width: 600px) {
        {
            height: 50%;
            width: 100%;
        }
    }
`;

export const SecondaryText = styled.div`
    background: #fff;
    color: #000;
    font-family: 'Akkurat';
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    width: 50%;

    h1 {
        color: #000;
        font-family: 'JetBrains Mono Bold';
        letter-spacing: -1px;
    }

    @media screen and (max-width: 600px) {
        {
            height: 50%;
            width: 100%;
        }
    }
`;

export const MyLayer = styled.div`
    background: transparent;
    color: #000;
    font-family: 'Akkurat';
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin-top: 20px;
    border-radius: 20px;

    h1 {
        color: #000;
        font-family: 'JetBrains Mono Bold';
        letter-spacing: -1px;
    }

    img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        object-fit: contain;
        margin-right: 10px;
    }

    span {
        font-size: 15px;
    }

    ul {
        display: flex;
        width: 100%;
    }

    li {
        margin: 5px;

        img {
            height: 30px;
            width: 30px;
            border: none;
            border-radius: 0;
        }
    }
`;

export const SecondaryImage = styled.div`
    background-image: url(${imageB});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 50%;

    @media screen and (max-width: 600px) {
        {
            height: 50%;
            width: 100%;
        }
    }
`;
