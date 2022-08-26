import styled from "styled-components";

export const NewsHomeContainer = styled.section`
    max-width: 1170px;
    width: 100%;
    margin: 5rem auto;

    h2 {
        font-weight: bold;
        font-family: 'Raleway', sans-serif;
        font-size: 2.8rem;
        color: ${({theme}) => theme.primary};
        line-height: 0.5;
        margin-bottom: 1rem;
    }
    h3 {
        font-family: 'Raleway', sans-serif;
        font-size: 1.8rem;
        color: ${({theme}) => theme.primary};
        margin-bottom: 2rem;
    }
`