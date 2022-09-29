import styled from "styled-components";

export const WhatsappButtonContainer = styled.div`
    background-color: #25D366;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1.3rem;
    right: 1.3rem;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    transition: all 150ms ease-in;

    a {
        color: #ffffff;
        font-size: 60px;
        margin-bottom: 11px;
    }

    &:hover {
        box-shadow: 0px 0px 15px rgb(0 0 0 / 80%);
        transform: scale(1.05)
    }
`;