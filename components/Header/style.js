import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;

    .top__header {
        background-color: ${({theme}) => theme.secondary};
        color: ${({theme}) => theme.white};
        
        .top__header__content {
            max-width: 1170px;
            width: 100%;
            margin: 0 auto;
            padding: .5rem 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .top__header__col1 {
                display: flex;
                align-items: center;
                
                p {
                    font-family: 'Lato', sans-serif;
                }

                svg {
                    &:first-child {
                        margin-right: 10px;
                    }
                }
            }
            .top__header__col2 {
                display: flex;
                align-items: center;

                p {
                    margin-right: 10px;
                    font-family: 'Lato', sans-serif;
                }

                .top__header__sm {
                    display: flex;
                    align-items: center;

                    a {
                        width: 32px;
                        height: 32px;
                        background-color: ${({theme}) => theme.white};
                        border-radius: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 5px;

                        svg {
                            color: ${({theme}) => theme.secondary};
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 980px){
            display: none;
        }

    }
    .bottom__header {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        .bottom__header__content {
            max-width: 1170px;
            width: 100%;
            margin: 0 auto;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .header__logo {
                cursor: pointer;   
            }

            nav {
                a {
                    font-family: 'Raleway', sans-serif;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-right: 40px;
                    color: ${({theme}) => theme.primary};

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }

        @media screen and (max-width: 980px){
            display: none;
        }
    }
    .bottom__mobile__header {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        .bottom__mobile__header__content {
            max-width: 1170px;
            width: 100%;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .mobile__hamb {
                cursor: pointer;

                svg {
                    font-size: 2rem;
                }
            }
            .mobile__nav {
                /* display: none; */
                position: absolute;
                background-color: ${({theme}) => theme.white};
                font-family: 'Raleway', sans-serif;
                font-weight: 700;
                text-transform: uppercase;
                color: ${({theme}) => theme.primary};
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 9;
                top: 0;
                right: 0;
                padding: 3rem 2rem 2rem;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
                border-radius: 5px;
                transform: translateY(-415px);
                opacity: 0;
                transition: all 300ms ease-in-out;
                pointer-events: none;

                a {
                    padding: 1rem 0;
                }

                .mobile__close {
                    cursor: pointer;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 1.7rem;
                }

            }
            .mobile__nav.activeMenu {
                transform: translateY(0px);
                opacity: 1;
                pointer-events: all;
                margin-top: 1rem;
            }
        }

        .mobile__sm {
            font-size: 1.5rem;
            margin-top: 1rem;
            padding: 1rem;
            display: flex;
            border-top: 1px solid rgba(0,0,0,.3);


            a {
                margin: 0 10px;
                width: 35px;
                height: 35px;
                border-radius: 35px;
                background-color: ${({theme}) => theme.primary};
                color: ${({theme}) => theme.white};
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .mobile__header__location {
            display: flex;
            align-items: center;
            max-width: 280px;
            margin-top: 2rem;

            p {
                font-size: 0.8rem;
                text-transform: capitalize;
                margin-left: 10px;
            }

            svg {
                font-size: 1.5rem;
            }
        }

        @media screen and (min-width: 981px){
            display: none;
        }
    }
`