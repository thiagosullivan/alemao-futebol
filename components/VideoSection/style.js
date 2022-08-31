import styled from "styled-components";

export const VideoSectionContainer = styled.section`
    background-image: url(https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/banner-youtube.jpg);
    background-position: center;
    background-size: cover;
    padding: 15rem 0;

    h2 {
        font-family: 'Raleway', sans-serif;
        font-size: 3.1rem;
        font-weight: 900;
        text-transform: uppercase;
        color: ${({theme}) => theme.white};
        text-align: center;
        margin: 0 auto 5rem;
        max-width: 1300px;
        text-shadow: 0px 0px 8px #000000;
    }

    a {
        background-color: ${({theme}) => theme.white};
        color: ${({theme}) => theme.secondary};
        width: 300px;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        font-size: 1.25rem;
        font-weight: bold;
        margin: 5rem auto 0;
        transition: all 150ms ease-in;

        &:hover {
            background-color: ${({theme}) => theme.secondary};
            color: ${({theme}) => theme.white};
        }
    }
`;

export const VideoModal = styled.div`
    background-color: rgba(0,0,0,.8);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 9;

    .video__container {
        max-width: 1000px;
        width: 100%;
        height: auto;
    }

    .video__close {
        color: ${({theme}) => theme.white};
        position: absolute;
        font-size: 3rem;
        top: 1%;
        right: 1%;
        cursor: pointer;
    }
`;