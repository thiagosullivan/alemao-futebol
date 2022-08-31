import styled from "styled-components";

export const LocationContainer = styled.section`
    background-color: ${({theme}) => theme.secondary};
    padding: 4rem 2rem;

    .location__content {
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
        padding: 3rem 0;
        color: ${({theme}) => theme.white};

        h2 {
            font-size: 3.43rem;
            font-family: 'Raleway', sans-serif;
            font-weight: 900;
            margin-bottom: 2rem;
        }
        p {
            font-size: 1.5rem;
            text-align: center;
        }

        .location__infos {
            border-top: 1px solid rgba(266, 266, 266, .8);
            margin-top: 6rem;            
            padding-top: 2rem;

            .location__title {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem;

                svg {
                    font-size: 3rem;
                    margin-right: 1rem;
                }

                p {
                    font-size: 2.18rem;
                }
            }

            .location__addresses {
                display:flex;
                justify-content: space-evenly;
                align-items: center;

                @media screen and (max-width: 980px){
                    flex-direction: column;
                }
            }
            .location__address {
                display: flex;
                align-items: center;
                flex-direction: column;                
                border: 1px solid rgba(266, 266, 266, .8);
                max-width: 450px;
                height: 350px;
                padding: 2rem;
                border-radius: 10px;

                &:first-child {
                    margin-right: 2rem;

                    @media screen and (max-width: 980px){
                        margin-right: 0;
                        margin-bottom: 2rem;
                    }
                }
                
                svg {
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                    height: 35px;
                    width: 35px;
                }

                h3 {
                    font-size: 1.7rem;
                    text-align: center;
                    font-weight: 900;
                    margin-bottom: 2rem;
                    text-transform: uppercase;
                }

                p {
                    font-size: 1.2rem;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }

        }
    }

`;