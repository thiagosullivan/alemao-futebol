import React, { useState, useRef, useCallback, useEffect } from 'react';
// import { YouTubeLite } from 'react-youtube-lite';
import { MdOutlineClose } from 'react-icons/md';
import { VideoModal, VideoSectionContainer } from './style';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function VideoSection() {

    const [ showModal, setShowModal ] = useState(false);

    const openModal = () => {
        setShowModal(!showModal)

        console.log('clickado')
    };

    const modalRef = useRef();

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false)
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal]);

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress]);

  return (
    <VideoSectionContainer id="youtube">
        {/* <h2>A melhor rede de escolas de futebol licenciadas do Brasil</h2>
        <button onClick={openModal}>
            Assista ao vídeo
        </button>

        { showModal ?
            <VideoModal refs={modalRef} onClick={closeModal}>
                <div className='video__container'>
                    <LiteYouTubeEmbed
                        id="Cky8bSNyeJE"
                        title="RECADO DO ALEMÃO I EX JOGADOR E EX TÉCNICO DO LONDRINA ESPORTE CLUBE I ESCOLA DE FUTEBOL"
                        poster="hqdefault"
                    />
                </div>
                <div className='video__close'>
                    <MdOutlineClose onClick={() => setShowModal(!showModal)}/>
                </div>
            </VideoModal>
        : null } */}

        <a
            href="https://www.youtube.com/channel/UC5g0_uQsY0cA0tFdCBQpGEA"
            target="_blank"
            rel="noopener noreferrer"
        >
            Acesse o nosso Canal
        </a>
    </VideoSectionContainer>
  )
}

export default VideoSection