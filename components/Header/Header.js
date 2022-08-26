import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoHeader from '../../assets/alemao-logo.png';
import { IoIosPin } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

import { HeaderContainer } from './style'

function Header() {
  return (
    <HeaderContainer>
        <div className='top__header'>
            <div className='top__header__content'>
                <div className='top__header__col1'>
                    <IoIosPin />
                    <p>Rua Sergipe, 800 - Centro - Londrina  - PR</p>
                </div>
                <div className='top__header__col2'>
                    <p>Siga as nossas Redes Sociais:</p>
                    <div className='top__header__sm'>
                        <a href="https://www.facebook.com/alemaofutebol" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/alemao_treinador" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/channel/UC5g0_uQsY0cA0tFdCBQpGEA" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        <a href="https://www.tiktok.com/@alemaofutebol" target="_blank" rel="noopener noreferrer">
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom__header'>
            <div className='bottom__header__content'>
                <Link href="/">
                    <Image src={LogoHeader} width={61} height={65}/>
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/">Quem Somos</Link>
                    <Link href="/">Unidades</Link>
                    <Link href="/">Alunos</Link>
                    <Link href="/">Licenciados</Link>
                    <Link href="/">Parceiros</Link>
                </nav>
            </div>
        </div>
    </HeaderContainer>
  )
}

export default Header;