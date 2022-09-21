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

    .feed__content__desktop {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 5px;
        padding: 5px;
        justify-items: center;

        

        @media screen and (max-width: 980px){
            display: none;
        }
    }

    .feed__content__mobile {
        display: none;

        @media screen and (max-width: 980px){
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 5px;
            padding: 5px;
            justify-items: center;
        }
    }

    .feed__item, .feed__item img, video {
        max-width: 300px;
        max-height: 300px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;