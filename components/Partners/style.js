import styled from "styled-components";

export const PartnersContainer = styled.section`
    max-width: 1170px;
    width: 100%;
    margin: 5rem auto;

    h2 {
        font-weight: bold;
        font-family: 'Raleway', sans-serif;
        font-size: 2.8rem;
        color: ${({theme}) => theme.primary};
        line-height: 0.5;
        margin-bottom: 5rem;
    }

    .partners__content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
        justify-content: center;
        justify-items: center;
        align-items: center;
        gap: 30px;

        a {
            width: 150px;
            height: auto;
            display: block;
        }
    }
`