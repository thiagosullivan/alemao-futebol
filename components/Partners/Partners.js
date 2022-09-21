import React from 'react';
import Image from 'next/image';
import AleluzLogo from '../../assets/aleluz-logo.png';
import BetelLogo from '../../assets/betel.png';
import CebracLogo from '../../assets/cebrac-logo.webp';
import CentroLogo from '../../assets/centro-do-coracao.png';
import DigitalCloudLogo from '../../assets/digital-cloud-logo.webp';
import KariluLogo from '../../assets/karilu-logo.webp';
import MassoniLogo from '../../assets/massoni-logo.webp';
import OriginalliLogo from '../../assets/originalli-logo.webp';
import ParceirosContrucaoLogo from '../../assets/parceiros-construcao-logo.webp';
import { PartnersContainer } from './style';

function Partners() {
  return (
    <PartnersContainer id="parceiros">
        <h2>Nossos Parceiros</h2>
        <div className='partners__content'>
          <a href="https://aleluz.com.br/" target="_blank" rel="noopener noreferrer">
            <Image src={AleluzLogo} layout="responsive" alt="Aleluz" />
          </a>
          <a href="https://betelveiculos.com.br" target="_blank" rel="noopener noreferrer">
            <Image src={BetelLogo} layout="responsive" alt="Betel" />
          </a>
          <a href="https://www.cebrac.com.br/londrina" target="_blank" rel="noopener noreferrer">
            <Image src={CebracLogo} layout="responsive" alt="Cebrac" />
          </a>
          <a href="https://centrodocoracao.com.br" target="_blank" rel="noopener noreferrer">
            <Image src={CentroLogo} layout="responsive" alt="Centro do Coração" />
          </a>
          <a href="https://digitalcloudmarketing.com.br/" target="_blank" rel="noopener noreferrer">
            <Image src={DigitalCloudLogo} layout="responsive" alt="Digital Cloud" />
          </a>
          <a href="https://www.karilu.com.br/" target="_blank" rel="noopener noreferrer">
            <Image src={KariluLogo} layout="responsive" alt="Karilu" />
          </a>
          <a href="https://www.graficamassoni.com.br/" target="_blank" rel="noopener noreferrer">
            <Image src={MassoniLogo} layout="responsive" alt="Massoni" />
          </a>
          <a href="https://www.originalli.com.br/" target="_blank" rel="noopener noreferrer">
            <Image src={OriginalliLogo} layout="responsive" alt="Originalli" />
          </a>
          <a href="https://parceirosdaconstrucao.negocio.site/" target="_blank" rel="noopener noreferrer">
            <Image src={ParceirosContrucaoLogo} layout="responsive" alt="Parceiros da Construção" />
          </a>
        </div>
    </PartnersContainer>
  )
}

export default Partners