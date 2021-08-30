import styled from 'styled-components'
import image from '../../photos/hello-i-m-nik-lUbIun4IL38-unsplash.jpg'

export const MainWrapper = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;

    video {
        width: 100%;
        background-color: #000;
    }
`;

export const Main = styled.div`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(36, 36, 36, 0.39) 0%, rgb(24, 20, 20) 100%), url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const Navigation = styled.div`
    height: 75px;
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 10px;
    position: absolute;
    top: 0px;

    span {
        font-size: 25px;
        font-family: 'JetBrains Mono Bold';
        letter-spacing: -2px;
        color: #fff;
    }

    img {
        height: auto;
        width: 30px;
        object-fit: contain;
        margin-left: 10px;
    }

    #return {
        color: #fff;
        font-family: 'Akkurat'
    }
`;

export const Heading = styled.div`
    font-family: 'JetBrains Mono Bold';
    font-size: 35px;
    color: #fff;
    letter-spacing: -1px;
    text-align: center;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const EnterGame = styled.div`
    height: 50px;
    width: 150px;
    background: mediumslateblue;
    border-radius: 20px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -1px;
    margin: 30px 0px;
`;