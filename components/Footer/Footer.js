import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoFooter from '../../assets/alemao-logo-white.png';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FooterContainer } from './style';

function Footer() {
  return (
    <FooterContainer>
        <div className='top__footer'>
          <div className='footer__logo'>
            <Link href="/">
              <Image src={LogoFooter} width={143} height={150} alt="Logo Footer"/>
            </Link>
          </div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/#quem-somos">Quem Somos</Link>
            <Link href="/#youtube">Youtube</Link>
            <Link href="/#contato">Contato</Link>
            <Link href="/#parceiros">Parceiros</Link>
          </nav>
          <p>Siga nossas redes sociais:</p>
          <div className='footer__sm'>
            <a href="https://www.facebook.com/alemaofutebol" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/alemao_treinador" et="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UC5g0_uQsY0cA0tFdCBQpGEA" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@alemaofutebol" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
          <span>Alemao training LTDA CNPJ: 47.628.685/0001-89 © 2022 - Todos os direitos reservados</span>
        </div>
        <div className='bottom__footer'>
          <p>Desenvolvido por <a href='#' target="_blank" rel="noopener noreferrer"><strong>Digital Cloud Marketing</strong></a></p>
        </div>
    </FooterContainer>
  )
}

export default Footer;