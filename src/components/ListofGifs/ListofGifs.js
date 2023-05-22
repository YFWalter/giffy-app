import React from 'react'
import Gif from '../Gif/Gif'
import './ListofGifs.css'

export default function ListOfGifs({ gifs }) {

    //if(gifs.loading) return <i>Cargando</i>

    return <div className='ListofGifs'> 
        {
            gifs.map(({id, title, url}) => 
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id}
                />
            )
        }
    </div>
}