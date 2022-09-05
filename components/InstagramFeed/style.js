import styled from "styled-components";

export const IntaFeedContainer = styled.section`
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

        @media screen and (max-width: 980px) {
            line-height: 0.8;
            text-align: center;
        }
    }

    .feed__content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 5px;
        padding: 5px;
    }

    .feed__item {
        
    }
    .feed__item img, video {
        max-width: 400px;
        max-height: 400px;
        width: 100%;
        height: 100%;
        max-height: 400px;
        object-fit: cover;
    }
`;