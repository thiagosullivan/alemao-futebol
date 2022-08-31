import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoHeader from '../../assets/alemao-logo.png';
import { IoIosPin } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

import { HeaderContainer } from './style'

function Header() {
    const [ menuOpen, setMenuOpen ] = useState();

  return (
    <HeaderContainer>
        <div className='top__header'>
            <div className='top__header__content'>
                <div className='top__header__col1'>
                    <IoIosPin />
                    <p>R. Vila-Lobos, 260 - Jd Mediterrâneo, Londrina - PR</p>
                </div>
                <div className='top__header__col2'>
                    <p>Siga as nossas Redes Sociais:</p>
                    <div className='top__header__sm'>
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
                </div>
            </div>
        </div>
        <div className='bottom__header'>
            <div className='bottom__header__content'>
                <div className='header__logo'>
                    <Link href="/">
                        <Image src={LogoHeader} width={61} height={65} alt="Logo Header" />
                    </Link>
                </div>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/#quem-somos">Quem Somos</Link>
                    <Link href="/#youtube">Youtube</Link>
                    <Link href="/#contato">Contato</Link>
                    <Link href="/#parceiros">Parceiros</Link>
                </nav>
            </div>
        </div>
        <div className='bottom__mobile__header'>
            <div className='bottom__mobile__header__content'>
                <div className='mobile__header__logo'>
                    <Link href="/">
                        <Image src={LogoHeader} width={61} height={65} alt="Logo Header" />
                    </Link>
                </div>
                <div className='mobile__hamb' onClick={() => setMenuOpen(true)}>
                    <GiHamburgerMenu />
                </div>
                {/* { menuOpen ?
                    <nav className={'mobile__nav' + ( menuOpen ? ' activeMenu' : '' )}>
                        <MdClose className='mobile__close' onClick={() => setMenuOpen(false)}/>
                        <Link href="/">
                            <a onClick={() => setMenuOpen(false)}>Home</a>
                        </Link>
                        <Link href="/#quem-somos">
                            <a onClick={() => setMenuOpen(false)}>Quem Somos</a>
                        </Link>
                        <Link href="/#youtube">
                            <a onClick={() => setMenuOpen(false)}>Youtube</a>
                        </Link>
                        <Link href="/#contato">
                            <a onClick={() => setMenuOpen(false)}>Contato</a>
                        </Link>
                        <Link href="/#parceiros">
                            <a onClick={() => setMenuOpen(false)}>Parceiros</a>
                        </Link>
                    </nav>
                : null } */}
                <nav className={'mobile__nav' + ( menuOpen ? ' activeMenu' : '' )}>
                    <MdClose className='mobile__close' onClick={() => setMenuOpen(false)}/>
                    <Link href="/">
                        <a onClick={() => setMenuOpen(false)}>Home</a>
                    </Link>
                    <Link href="/#quem-somos">
                        <a onClick={() => setMenuOpen(false)}>Quem Somos</a>
                    </Link>
                    <Link href="/#youtube">
                        <a onClick={() => setMenuOpen(false)}>Youtube</a>
                    </Link>
                    <Link href="/#contato">
                        <a onClick={() => setMenuOpen(false)}>Contato</a>
                    </Link>
                    <Link href="/#parceiros">
                        <a onClick={() => setMenuOpen(false)}>Parceiros</a>
                    </Link>

                    <div className='mobile__sm'>
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
                    <div className='mobile__header__location'>
                        <IoIosPin />
                        <p>R. Vila-Lobos, 260 - Jd Mediterrâneo, Londrina - PR</p>
                    </div>
                </nav>
            </div>
        </div>
    </HeaderContainer>
  )
}

export default Header;