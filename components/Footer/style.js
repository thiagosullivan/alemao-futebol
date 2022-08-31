import { darken, lighten } from "polished";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top: 5rem;
    color: ${({theme}) => theme.white};
    
    .top__footer {
        background-image: url(https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/footer-bg.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        padding: 5rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .footer__logo {
            cursor: pointer;
        }

        nav {
            border-top: 3px solid ${({theme}) => theme.white};
            border-bottom: 3px solid ${({theme}) => theme.white};
            padding: 2rem;
            max-width: 1170px;
            width: 100%;
            margin: 3rem auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            a {
                font-family: 'Raleway';
                font-size: 1rem;
                font-weight: bold;
                text-transform: uppercase;
                margin: 20px;

                &:hover {
                    color: ${({ theme }) => darken(0.3, theme.white)};
                }
            }
        }

        p {
            font-family: 'Raleway';
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 2rem;
        }

        span {
            font-family: 'Raleway';
            font-size: 0.75rem;
            text-transform: uppercase;

            @media screen and (max-width: 980px) {
                text-align: center;
            }
        }

        .footer__sm {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 3rem;

            a {
                background-color: ${({theme}) => theme.white};
                width: 45px;
                height: 45px;
                font-size: 2rem;
                border-radius: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${({theme}) => theme.secondary};
                margin: 0 .5rem;
                transition: all 100ms ease-in;

                &:hover {
                    background-color: ${({theme}) => theme.secondary};
                    color: ${({theme}) => theme.white};
                }
            }
        }
    }
    .bottom__footer {
        color: ${({theme}) => theme.secondary};
        text-align: center;
        padding: .5rem 0;
        
        p {
            font-family: 'Raleway';

            a {
                &:hover {
                    color: ${({ theme }) => darken(0.5, theme.white)};
                }
            }
        }

        @media screen and (max-width: 980px) {
            font-size: 0.9rem;
        }
    }
`;