import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "wouter"
import { useGifs } from '../../hooks/useGifs'
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListofGifs/ListofGifs'

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home () {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs() 


    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type= 'text' value={keyword} />
            </form>
            <h3 className="App-title">Última busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) =>(
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}