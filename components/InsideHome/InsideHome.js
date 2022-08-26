import React from 'react';
import Image from 'next/image';
import InsideOne from '../../assets/inside-img-1.jpg';
import InsideTwo from '../../assets/inside-img-2.jpg';
import InsideThree from '../../assets/inside-img-3.jpg';
import InsideFour from '../../assets/inside-img-4.jpg';
import InsideFive from '../../assets/inside-img-5.jpg';
import InsideSix from '../../assets/inside-img-6.jpg';
import { InsideCard, InsideHomeContainer } from './style';
import Link from 'next/link';

function InsideHome() {
  return (
    <InsideHomeContainer>
        <h2>Por dentro do chute!</h2>
        <div className='inside__options'>
            <Link href="/">
                <InsideCard>
                    <Image src={InsideOne} widt={335} height={210} />
                    <p>Alunos</p>
                </InsideCard>
            </Link>
            <Link href="/">
                <InsideCard>
                    <Image src={InsideTwo} widt={335} height={210} />
                    <p>Licenciados</p>
                </InsideCard>
            </Link>
            <Link href="/">
                <InsideCard>
                    <Image src={InsideThree} widt={335} height={210} />
                    <p>Parceiros</p>
                </InsideCard>
            </Link>
            <Link href="/">
                <InsideCard>
                    <Image src={InsideFour} widt={335} height={210} />
                    <p>Metodologia</p>
                </InsideCard>
            </Link>
            <Link href="/">
                <InsideCard>
                    <Image src={InsideFive} widt={335} height={210} />
                    <p>Uniformes</p>
                </InsideCard>
            </Link>
            <Link href="/">
                <InsideCard>
                    <Image src={InsideSix} widt={335} height={210} />
                    <p>Carteirinhas</p>
                </InsideCard>
            </Link>
        </div>
    </InsideHomeContainer>
  )
}

export default InsideHome