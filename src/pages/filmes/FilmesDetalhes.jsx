import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

    const [filme, setFilme] = useState({})

    useEffect(()=>{
    
        const promessa = apiFilmes.get('movie/' + params.id + '?language=pt-BR')
        


        promessa.then(resultado=>{
    
            setFilme(resultado.data);
        })
    
    
    }, [])


    const params = useParams()

    return (
    <div>
        <h3>
            FilmesDetalhes: {filme.title}
        </h3>
        
    </div>
  )
}

export default FilmesDetalhes