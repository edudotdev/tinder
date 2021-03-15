import React, {useState, useEffect} from 'react'
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


const Cards = () => {

  const [peoples, setPeoples] = useState([]);
	const [category, setCategory] = useState('');
	const [search, setSearch] = useState('');

	const apiConnection = (url = `${process.env.REACT_APP_API_URL}/people`) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setPeoples(data.data))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		apiConnection();
	}, []);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/people?gender=${category}`)
			.then((response) => response.json())
			.then((data) => setPeoples(data.data))
			.catch((error) => console.log(error));
	}, [category]);

	const refresh = (id) => {
		setPeoples((peoples) => peoples.filter((people) => people.idPeople !== id));
	};

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