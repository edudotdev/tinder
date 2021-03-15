import React from 'react'

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

const Form = () => {
  return ( 
    <Container>
      <FormS action="">
        <WrapperInput>
          <Input>
            <input type="text" id="name" placeholder="name"/>
          </Input>

          <Input>
            <input type="text" id="lastname" placeholder="lastname"/>
          </Input>
        </WrapperInput>

        <WrapperSelect>
          <Input>
            <input type="number" min="0" id="age" placeholder="age"/>
          </Input>

          <Input>
            <select name="" id="gender">
              <option value="gender">Gender</option>
              <option value="male">Male</option>
              <option value="women">Women</option>
            </select>
          </Input>

          <Input>
            <select name="" id="preferencer">
            <option value="preferencer">Preferencer</option>
              <option value="male">Male</option>
              <option value="women">Women</option>
            </select>
          </Input>
        </WrapperSelect>
        <Input>
          <textarea name="description" id="" maxLength="100" placeholder="describe you"></textarea>
        </Input> 
        <WrapperInput>
          <Input>
            <input type="text" id="image" placeholder="image"/>
          </Input>
        </WrapperInput>
        <button>Save</button>
      </FormS>

      <ImgWrapper>
        <img src={logo} alt=""/>
      </ImgWrapper>
      
    </Container>
   );
}
 
export default Form;