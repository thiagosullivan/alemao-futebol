import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Alemao from '../../assets/alemao.webp';
import Sec2Two from '../../assets/sec2-img2.png';
import { AboutContainer } from './style';

function QuemSomos() {
  return (
    <AboutContainer>
        <div className='sec2__img'>
                <Image src={Alemao} width={490} height={670} alt="Alemão" />
        </div>
        <div className='sec2__text'>
            <h2>Quem Somos</h2>
            <h3>Alemão Futebol</h3>
            <p>Nascemos com objetivo de desenvolver o potencial de crianças e jovens que sonham em seguir carreira no futebol. Trabalhamos fundamentos de base, estimulamos habilidades, orientamos sobre a tática de jogo, posicionamento em campo e formamos pessoas colaborativas, ativas e realizadoras.</p>
            <a href="https://api.whatsapp.com/send?phone=5543999544832" target="_blank" rel="noopener noreferrer">
              Chame no Whatsapp
            </a>
        </div>
    </AboutContainer>
  )
}

export default QuemSomos