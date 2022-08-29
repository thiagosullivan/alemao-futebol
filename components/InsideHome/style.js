import styled from "styled-components";

export const InsideHomeContainer = styled.section`
    background-image: url(https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/inside-bg.jpg);
    padding: 5rem 0 15rem;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        bottom: 0;
        border-bottom: 200px solid white;
        border-left: 2150px solid transparent;
    }

    h2 {
        font-size: 5rem;
        color: ${({theme}) => theme.white};
        font-weight: 700;
        text-align: center;
        margin-bottom: 5rem;
    }

    .inside__options {
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
        justify-content: center;
        gap: 50px;
    }

    a {
        color: ${({theme}) => theme.white};
        font-size: 1.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        svg {
            font-size: 4rem;
            margin-bottom: 1rem;
        }
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