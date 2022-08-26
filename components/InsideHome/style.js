import styled from "styled-components";

export const InsideHomeContainer = styled.section`
    background-image: url(https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/inside-bg.jpg);
    padding: 3rem 0 12rem;

    &::after {
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        bottom: 17px;
        border-bottom: 200px solid white;
        border-left: 2150px solid transparent;
    }

    h2 {
        font-size: 5rem;
        color: ${({theme}) => theme.white};
        font-weight: 700;
        text-align: center;
        margin-bottom: 3rem;
    }

    .inside__options {
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
        justify-content: center;
        gap: 50px;
    }
`

export const InsideCard = styled.div`
    cursor: pointer;
    
    p {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${({theme}) => theme.white};
        text-transform: uppercase;
        text-align: center;
        margin-top: 1rem;
    }
`;