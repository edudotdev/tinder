import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import Cards from './components/Cards'

function App() {

  const [peoples, setPeoples] = useState([])
  const [filtro, setFiltro] = useState([])
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')

  const apiConnection = (url = 'https://0eaa1292f690.ngrok.io/people') => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPeoples(data))
  }

  useEffect(() => {
    apiConnection()
  }, [])

  useEffect(() => {
    setFiltro(peoples)
  }, [peoples])

  useEffect(() => {
    if(category === '') {
      setFiltro(peoples)
    } else if(category === 'Female'){
      setFiltro(peoples.filter(people => people.gender === 'Female'))
    } else {
      setFiltro(peoples.filter(people => people.gender === 'Male'))
    }
  }, [category])

  useEffect(() => {
    if(search === ''){
      setFiltro(peoples)
    } else {
      setFiltro(peoples.filter(people => `${people.firstName}` === search || `${people.firstName} ${people.lastName}` === search || `${people.lastName}` === search))
    }
  }, [search])

  return (
    <>
      {true
        ? 
          <Form />
        :
            <Cards 
              peoples={peoples}
              setCategory={setCategory}
              category={category}
              filtro={filtro}
              setSearch={setSearch}
              search={search}
            />
      }
    </>
  );
}

export default App;
