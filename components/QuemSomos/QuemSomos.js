import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Sec2One from '../../assets/sec2-img1.png';
import Sec2Two from '../../assets/sec2-img2.png';
import { AboutContainer } from './style';

function QuemSomos() {
  return (
    <AboutContainer>
        <div className='sec2__img'>
            <div className='sec2__img1'>
                <Image src={Sec2One} />
            </div>
            <div className='sec2__img2'>
                <Image src={Sec2Two} />
            </div>
        </div>
        <div className='sec2__text'>
            <h2>Quem Somos</h2>
            <h3>Chute Inicial Corinthians</h3>
            <p>O Chute Inicial Corinthians é a rede oficial de escolas de futebol do Sport Club Corinthians Paulista, atendendo a alunos desde os 4 até os 17 anos de idade.</p>
            <p>Como uma das maiores e mais bem estruturadas redes de futebol licenciadas do Brasil e do mundo, o Chute Inicial é motivo de muito orgulho para o clube e para as unidades licenciadas, gerando também maior responsabilidade para todos.</p>
            <Link href="/">
                Saiba Mais
            </Link>
        </div>
    </AboutContainer>
  )
}

export default QuemSomos