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
            text-align: center;
            
            span {
                font-size: 2rem;
            }
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

                    @media screen and (max-width: 980px){
                        display: none;
                    }
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
                min-height: 350px;
                padding: 2rem;
                border-radius: 10px;

                @media screen and (max-width: 550px){
                    min-height: 250px;
                    padding: 1rem;
                }

                &:hover {
                    color: ${({theme}) => theme.white};
                }

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

                    @media screen and (max-width: 550px){
                        font-size: 1.4rem;
                    }
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

        .whatsapp__btn {
            background-color: ${({theme}) => theme.white};
            color: ${({theme}) => theme.secondary};
            border: 1px solid ${({theme}) => theme.white};
            width: 280px;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Raleway', sans-serif;
            font-size: 1.25rem;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 35px;
            margin: 4rem auto 0;

            @media screen and (max-width: 980px){
                margin: 4rem auto 0;
            }

            @media screen and (max-width: 550px){
                width: 220px;
                font-size: 1rem;
            }
        }
    }

`;