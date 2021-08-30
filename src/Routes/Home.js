import React from 'react'
import { MainWrapper, Main, Navigation, Heading, EnterGame } from '../Components/styles/StyledMain'
import { BodyLayer, PrimaryImage, PrimaryText, SecondaryImage, SecondaryText, MyLayer, Video } from '../Components/styles/StyledBody'
import logo from '../photos/logo.png'
import oscar from '../photos/oscar.jpg'
import linkedin from '../photos/linkedin.svg'
import github from '../photos/github.png'
import twitter from '../photos/twitter.png'
import internet from '../photos/internet.png'
import video from '../photos/tetris.mp4'

const Home = () => {
    document.title = 'Welcome to Tetris';

    // const video = 'https://firebasestorage.googleapis.com/v0/b/random-4f92b.appspot.com/o/My%20Movie.mov?alt=media&token=56f6fae1-5c52-4355-97a5-f9fa184f9d49';
    return (
        <MainWrapper>
            <Main>
                <Navigation>
                    <span>Tetris</span> <img src={logo} alt='logo'/>
                </Navigation>

                <Heading>
                    Feeling Nostalgic? Play Tetris!
                    <EnterGame><a href='/game'>Play Now!</a></EnterGame>
                </Heading>
            </Main>

            <BodyLayer>
                <PrimaryImage/>
                <PrimaryText>
                    <h1>Objective</h1>
                    In Tetris, players complete lines by moving differently shaped pieces (tetrominoes), which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the playing field is filled. The longer the player can delay this inevitable outcome, the higher their score will be.
                </PrimaryText>
            </BodyLayer>

            <video autoPlay preload='true' loop muted playsInline>
                <source src={video} type='video/mp4'/>
            </video>

            <BodyLayer>
                <SecondaryText>
                    <h1>Development</h1>
                    This Tetris web application was built with React.js & Styled Components for the August 2021 Mintbean Hackathon.
                    <MyLayer>
                        <img src={oscar} alt='Oscar'/>
                        <span>
                            Oscar O'Neill | Software Engineer <br/>
                            <ul>
                                <li><a href='https://oscaroneill.xyz' target='_blank' rel='noreferrer noopener'><img src={internet} alt='globe'/></a></li>
                                <li><a href='https://www.linkedin.com/in/oscarone/' target='_blank' rel='noreferrer noopener'><img src={linkedin} alt='linkedin'/></a></li>
                                <li><a href='https://github.com/oscar-oneill' target='_blank' rel='noreferrer noopener'><img src={github} alt='github'/></a></li>
                                <li><a href='https://twitter.com/oscaroneilljs' target='_blank' rel='noreferrer noopener'><img src={twitter} alt='twitter'/></a></li>
                            </ul>
                        </span>
                    </MyLayer>
                </SecondaryText>
                <SecondaryImage/>
            </BodyLayer>

        </MainWrapper>
    )
}

export default Home
