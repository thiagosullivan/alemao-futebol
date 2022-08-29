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
          <Link href="/">
            <Image src={LogoFooter} width={143} height={150} alt="Logo Footer"/>
          </Link>
          <nav>
            <Link href="/">
              Quem Somos
            </Link>
            <Link href="/">
              Notícias & Ações
            </Link>
            <Link href="/">
              Destaques das unidades
            </Link>
            <Link href="/">
              Unidades
            </Link>
            <Link href="/">
              Metodologia
            </Link>
            <Link href="/">
              Alunos
            </Link>
            <Link href="/">
              Licenciados
            </Link>
            <Link href="/">
              Parceiros
            </Link>
            <Link href="/">
              Materiais Oficiais
            </Link>
            <Link href="/">
              Revista Chute Inicial
            </Link>
            <Link href="/">
              Newsletter
            </Link>
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