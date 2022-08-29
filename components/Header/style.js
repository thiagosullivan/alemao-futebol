import styled from "styled-components";

export const HeaderContainer = styled.header`

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
    }
`