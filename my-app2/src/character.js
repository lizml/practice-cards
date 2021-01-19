import React, { Component } from 'react';
import styled from 'styled-components'

const CharacterStyled = styled.div`
border:1px solid blue;
width:265px;
text-align:left;
border-radius:5px;
display:grid;
overflow:hidden;
box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
img{  
       height:200px;
}
.details{
    padding:1.5em;
}
h2{
    margin:0;
    margin-buttom:1rem;
}

`

const Character = ({
    img,
    name,
    species,
    status,
}) => {
    return(
        <CharacterStyled>
         <div className="details">
           <img loading = "lazy" src ={img} alt =""/>
           <p>{name}</p>
           <p>{species}</p>
           <p>{status}</p>
         </div>
        </CharacterStyled>
        
    )
}

export default Character;