import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IntaFeedContainer } from './style';

function InstagramFeed() {
    
    const [ feedList, setFeedList ] = useState([]);

    async function getInstaFeed(){
        const token = process.env.NEXT_PUBLIC_INSTA_TOKEN;
        const fields = 'media_url,media_type,permalink';
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

        const { data } = await axios.get(url);
        console.log(data, 'DATA')

        setFeedList(data.data);
    }

    useEffect(() => {
        getInstaFeed();
    }, []);

  return (
    <IntaFeedContainer>
        <h2>Instagram</h2>
        <div className='feed__content'>
            {feedList.map( item => (
                <a key={item.id} href={item.permalink} className="feed__item" target="_blank" rel="noopener noreferrer">
                    {item.media_type === 'VIDEO' ? (
                        <video>
                            <source src={item.media_url} />
                        </video>)
                        : <img src={item.media_url}/>}
                </a>
            ))}
        </div>
    </IntaFeedContainer>
  )
}

export default InstagramFeed