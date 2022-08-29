import React from 'react';
import Image from 'next/image';
import InsideOne from '../../assets/inside-img-1.jpg';
import InsideTwo from '../../assets/inside-img-2.jpg';
import InsideThree from '../../assets/inside-img-3.jpg';
import InsideFour from '../../assets/inside-img-4.jpg';
import InsideFive from '../../assets/inside-img-5.jpg';
import InsideSix from '../../assets/inside-img-6.jpg';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { InsideCard, InsideHomeContainer } from './style';
import Link from 'next/link';

function InsideHome() {
  return (
    <InsideHomeContainer>
        <h2>Alemão Futebol na internet</h2>
        <div className='inside__options'>
            <a href='https://www.facebook.com/alemaofutebol'>
                <FaFacebookF />
                /alemaofutebol
            </a>
            <a href='https://www.instagram.com/alemao_treinador'>
                <FaInstagram />
                @alemao_treinador
            </a>
            <a href='https://www.tiktok.com/@alemaofutebol'>
                <FaTiktok />
                @alemaofutebol
            </a>
            <a href='https://www.youtube.com/channel/UC5g0_uQsY0cA0tFdCBQpGEA'>
                <FaYoutube />
                Alemão Futebol
            </a>
        </div>
    </InsideHomeContainer>
  )
}

export default InsideHome