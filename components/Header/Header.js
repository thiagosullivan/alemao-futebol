import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer } from './style'

function Header() {
  return (
    <HeaderContainer>
        <div className='top__header'>
            <Link>
                <Image />
            </Link>
        </div>
    </HeaderContainer>
  )
}

export default Header;