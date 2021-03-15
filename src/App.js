import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import Cards from './components/Cards'

function App() {

  const [peoples, setPeoples] = useState([])
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
    fetch(`https://0eaa1292f690.ngrok.io/people?gender=${category}`)
    .then((response) => response.json())
    .then(data => setPeoples(data))
    .catch(error => console.log(error))
  }, [category])

  useEffect(() => {
    if(search) {

    }
  }, [search])

  const refresh = (id) => {
    setPeoples(peoples => peoples.filter(people => people.idPeople !== id))
  }

  return (
    <>
      {false
        ? 
          <Form />
        :
            <Cards 
              peoples={peoples}
              setPeoples={setPeoples}
              setCategory={setCategory}
              category={category}
              setSearch={setSearch}
              search={search}
              refresh={refresh}
            />
      }
    </>
  );
}

export default App;
