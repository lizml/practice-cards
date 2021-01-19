import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Character from './character'

const CharacterListStyled = styled.div`
display:grid;
grid-row-gap: 2.3em;
justify-content:center;
`

const CharacterList = ({
}) => {
    const[characterList, setCharacterList] = useState([])
    const [charLisTemp, setCharListTemp] = setState(charLis)

    useEffect((data)=>{
        fetch('https://rickandmortyapi.com/api/character')
        {
            api.then(data => {
                setCharList(data.results)
                setCharListTemp(data.results)
            })
        }
        const filterByName = (word) => {
            const temp = charLis.filter((value) => {
                return value.name.includes(word.toLowerCase())
            })
            charLisTemp(temp)
        }

        .then((data)=>{
            setCharacterList(data.results)
            console.log(data.results)
        })
        // .catch(()=>{
        //     console.log('error');
        // })
        },[])

    return(
        <CharacterListStyled>
         {/* {   <Input onChange={filterByName}>Buscar</Input> */}
             characterList.map(({image,name,species,status})=>{
                return(
                <Character
                img={image}
                name={name}
                key={name}
                species= {species}
                status= {status}
             />
             )
             })
         } 
        
          {/* <Character
            img="https://img.hipertextual.com/img/2017/03/05/camiseta-joker-rick-morty.jpg"
            name="Rick"
            species= "Human"
            status= "Alive"
         />
         <Character
            img="https://img.hipertextual.com/img/2017/03/05/camiseta-joker-rick-morty.jpg"
            name="Rick"
            species= "Human"
            status= "Alive"
         />
          <Character
            img="https://img.hipertextual.com/img/2017/03/05/camiseta-joker-rick-morty.jpg"
            name="Rick"
            species= "Human"
            status= "Alive"
         />
          <Character
            img="https://img.hipertextual.com/img/2017/03/05/camiseta-joker-rick-morty.jpg"
            name="Rick"
            species= "Human"
            status= "Alive"
         />  */}
        </CharacterListStyled>
    )
}

export default CharacterList;