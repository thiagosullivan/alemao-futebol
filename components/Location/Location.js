import React from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import { IoIosPin } from 'react-icons/io';
import { LocationContainer } from './style';

function Location() {
  return (
    <LocationContainer>
        <div className='location__content'>
            <h2>Traga seus filhos&#40;as&#41; para treinar comigo!</h2>
            <p>Escolha o local mais acessível e chame no WhatsApp para mais informações.</p>

            <div className='location__infos'>
                <div className='location__title'>
                    <IoIosPin />
                    <p>Locais de atendimento com a escola de futebol:</p>
                </div>
                <div className='location__addresses'>
                    <div className='location__address'>
                        <BsArrowReturnRight />
                        <div>
                            <h3>Londrina Country Club</h3>
                            <p>R. Fernando de Noronha, 977 - Centro, Londrina - PR</p>
                        </div>
                    </div>
                    <div className='location__address'>
                        <BsArrowReturnRight />
                        <div>
                            <h3>ACM - Associação Cristã de Moços do Brasil</h3>
                            <p>R. Vila-Lobos, 260 - Jd Mediterrâneo, Londrina - PR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LocationContainer>
  )
}

export default Location