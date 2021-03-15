import React from 'react'
import Card from './Card'
import Header from './Header'

import styled from 'styled-components'

const ContainerCards = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: 60px 0;
`

const CardsS = styled.div`
  width: 100%;
  max-width: 1300px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
`

const Cards = ({peoples, setCategory, category, setSearch, search, setPeoples, refresh}) => {
  return ( 
    <>
    <Header 
      setCategory={setCategory}
      category={category}
      setSearch={setSearch}
      search={search}
      setPeoples={setPeoples}
    />
    <ContainerCards> 
      <CardsS>
        {peoples.map(people => (
          <Card 
            key={people.idPeople}
            people={people}
            setPeoples={setPeoples}
            refresh={refresh}
          />
        ))}
      </CardsS>
    </ContainerCards>
    </>
   );
}
 
export default Cards;