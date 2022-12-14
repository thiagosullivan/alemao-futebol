import styled from "styled-components";

export const HomeSliderContainer = styled.section`
    position: relative;

    /* &::after {
        content: '';
        display: block;
        background-color: ${({theme}) => theme.white};
        width: 100%;
        position: absolute;
        bottom: 0;
        border-bottom: 200px solid white;
        border-left: 2150px solid transparent;
    } */
    .slider__item{
        position: absolute;
        top: 20%;
        left: 15%;
        color: ${({theme}) => theme.white};
        max-width: 650px;
        width: 100%;

        h3 {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 5.5rem;
        }
        h4 {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 2rem;
            margin-bottom: 1.56rem;
        }
        p {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 1.6rem;
            margin-bottom: 1.56rem;
        }
        a {
            font-family: 'Raleway';
            padding: 1rem 2rem;
            font-weight: 700;
            border: 1px solid ${({theme}) => theme.white};
            border-radius: 30px;
            text-transform: uppercase;
            display: block;
            width: 250px;
            transition: all 150ms ease-in;

            &:hover {
                background-color: ${({theme}) => theme.white};
                color: ${({theme}) => theme.secondary};
            }
        }
    }

    .carousel-indicators [data-bs-target] {
        width: 15px !important;
        height: 15px !important;
        border-radius: 10px !important;
        border: inherit !important;
        position: relative;
        margin-right: 7px;
        background-color: #000000;
    }

    .carousel-indicators {
        margin-bottom: 3%;
    }

    .carousel-indicators .active::after {
        content: '';
        display: block;
        position: absolute;
        width: 25px;
        height: 25px;
        top: -5px;
        right: -5px;
        border-radius: 30px;
        background-color: transparent;
        border: 1px solid #000000;
    }

    .carousel__mobile {
        display: none;

        .carousel-indicators [data-bs-target] {
            width: 15px !important;
            height: 15px !important;
            border-radius: 10px !important;
            border: 1px solid #000000 !important;
            position: relative;
            margin-right: 7px;
            background-color: #ffffff;
            box-shadow: 0 2px 2px rgba(0,0,0,.9);
            display: none;
        }

        .carousel-indicators .active::after {
            content: '';
            display: block;
            position: absolute;
            width: 25px;
            height: 25px;
            top: -5px;
            right: -5px;
            border-radius: 30px;
            background-color: transparent;
            border: 1px solid #ffffff;
            box-shadow: 0 0px 10px rgba(0,0,0,1);
        }

    }

    @media screen and (max-width: 760px){
        .carousel__mobile {
            display: block;
        }
        .carousel__desktop {
            display: none;
        }
    }

`;