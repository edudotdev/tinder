import React, {useState} from 'react'

import logo from '../img/logo.png'

import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  min-height: 100vh;
  place-items: center;
`

const ImgWrapper = styled.div`
  display: grid;
  background: #fff;
  height: 100%; 
  width: 100%;
  place-items: center;

  img {
    width: 100%;
    max-width: 400px;
  }
`

const FormS = styled.form`
  position: relative;
  width: 500px;

  display: grid;
  gap: 20px;

  button {
    background-color: #ff6c5a;
    background-image: linear-gradient(45deg, #ff6c5a 0%, #fe2a7b 20%);
    border-radius: 10px;
    border: none;
    padding: 15px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: background .3s ease;
  }

  button:hover {
    background-image: linear-gradient(45deg, #ff6c5a 0%, #fe2a7b 81%);
  }
`

const WrapperInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`

const WrapperSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`

const Input = styled.div`

  input, select, textarea { 
    border-radius: 10px;
    border: 1px solid #eee;
    outline: none;
    background: #fff;
    transition: box-shadow .3s ease;
    padding: 15px;
    font-size: 15px;
    width: 100%;
  }

  input:focus, select:focus, textarea:focus {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05)
  }

  textarea[name=description] {
    resize: none;
    height: 100px;
  }
`

const Error = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #ffe8e8;
  color: #ff5c7a;
  padding: 20px;
  border-radius: 10px; 
  bottom: -85px;

  span {
    margin-right: 20px;
  }
`

const Form = () => {

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    preferences: '',
    description:  '',
    image: '',
  })

  const [error, setError] = useState(false)

  const {firstName, lastName, age, gender, preferences, description, image} = data

  async function postData(url, data) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(firstName.trim() === '' || lastName.trim() === '' 
          || age.trim() === '' || gender.trim() === ''
          || preferences.trim() === '' || description.trim() === ''
          || image.trim() === '') {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
      return
    }
    setError(false)
   // postData('https://0eaa1292f690.ngrok.io/people', data)
    console.log('pito');
  }

  const datos = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return ( 
    <Container>
      <FormS action="" onSubmit={handleSubmit}>
        <WrapperInput>
          <Input>
            <input type="text" name="firstName" placeholder="name" onChange={datos}/>
          </Input>

          <Input>
            <input type="text" name="lastName" placeholder="lastname" onChange={datos}/>
          </Input>
        </WrapperInput>

        <WrapperSelect>
          <Input>
            <input type="number" min="0" name="age" placeholder="age" onChange={datos}/>
          </Input>

          <Input>
            <select name="gender" id="gender" onChange={datos}>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </Input>

          <Input>
            <select name="preferences" id="preferences" onChange={datos}>
            <option value="">Preferences</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </Input>
        </WrapperSelect>
        <Input>
          <textarea name="description" maxLength="100" placeholder="describe you" onChange={datos}></textarea>
        </Input> 
        <WrapperInput>
          <Input>
            <input type="text" name="image" placeholder="image" onChange={datos}/>
          </Input>
        </WrapperInput>
        <button type="submit">Save</button>
        {error 
          ? 
            <>
              <Error> 
                <span className="material-icons">
                  report_problem
                </span>
                Completa todos los campos
              </Error> 
            </>
          : 
            null}
      </FormS>

      <ImgWrapper>
        <img src={logo} alt=""/>
      </ImgWrapper>
      
    </Container>
   );
}
 
export default Form;