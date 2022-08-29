import Link from 'next/link';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { HomeSliderContainer } from './style';

function HomeSlider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <HomeSliderContainer>

        <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} controls={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.corinthians.com.br/uploads/JMRak8gj/bg1.jpeg"
                    alt="First slide"
                />
                <div className='slider__item'>
                    <h3>Chute Inicial</h3>
                    <h4>Futebol com arte e disciplina</h4>
                    <p>É a rede oficial de escolas de futebol do Sport Club Corinthians Paulista, atendendo a alunos desde os 04 até os 17 anos de idade.</p>
                    <a href="https://api.whatsapp.com/send?phone=5543999544832" target="_blank" rel="noopener noreferrer">
                        Chame no Whatsapp
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.corinthians.com.br/uploads/WmhvSH6x/bg2.jpeg"
                    alt="Second slide"
                />

                <div className='slider__item'>
                    <h3>Jogo na Arena</h3>
                    <h4>Torcida Chute Inicial</h4>
                    <p>Participação especial da torcida Chute Inicial nos jogos do Timão na Arena Corinthians.</p>
                    <a href="https://api.whatsapp.com/send?phone=5543999544832" target="_blank" rel="noopener noreferrer">
                        Chame no Whatsapp
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.corinthians.com.br/uploads/chtinicial4/bg4.jpeg"
                    alt="Third slide"
                />

                <div className='slider__item'>
                    <h3>Jogo na Arena</h3>
                    <h4>Sala de Aquecimento</h4>
                    <p>Os alunos vivenciam o clima pré-jogo e assistem os jogadores em atividade de aquecimento, momentos antes da entrada em campo.</p>
                    <a href="https://api.whatsapp.com/send?phone=5543999544832" target="_blank" rel="noopener noreferrer">
                        Chame no Whatsapp
                    </a>
                </div>
            </Carousel.Item>
        </Carousel>
    </HomeSliderContainer>
  )
}

export default HomeSlider