import React from 'react'
import Card from './Card'
import Header from './Header'

import styled from 'styled-components'

const ContainerCards = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin-top: 100px;
`

const CardsS = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
`

const Cards = ({filtro, setCategory, category, setSearch, search}) => {
  return ( 
    <>
    <Header 
      setCategory={setCategory}
      category={category}
      setSearch={setSearch}
      search={search}
    />
    <ContainerCards> 
    <CardsS>
      {filtro.map(people => (
        <Card 
          key={people.idPeople}
          people={people}  
        />
      ))}
    </CardsS>
    </ContainerCards>
    </>
   );
}
 
export default Cards;