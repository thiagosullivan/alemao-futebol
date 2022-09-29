import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WhatsappButtonContainer } from './style';

function WhatsappButton() {
  return (
    <WhatsappButtonContainer>
        <a href="https://api.whatsapp.com/send?phone=5543999544832" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
        </a>
    </WhatsappButtonContainer>
  )
}

export default WhatsappButton