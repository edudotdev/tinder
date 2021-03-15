import React from 'react'
import { Link } from "react-router-dom";
import logo from '../img/logo.png'

import styled from 'styled-components'

const HeaderS = styled.header`
  background: #fff;
  display: grid;
  grid-template-columns: 60px 1.3fr .7fr;  
  gap: 100px;
  padding: 15px 50px;

  img {
    width: 100%;
  }

  .wrapperSearch {
    display: grid;
    place-items: center;

    input {
      width: 80%;
      height: 40px;

      outline: none;
      padding: 0 20px;
      background: #ffe8e8;
      border: none;
      border-radius: 30px;
      color: #ff5c7a;
      font-weight: 600;

      &::-webkit-input-placeholder { color: #ff9aad; } 
    }
  }

  .wrapperButtons {
    display: flex;

    button, .register {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    padding: 10px 10px;
    border-radius: 99px;
    width: 130px;
    margin: 10px 0;
    border: none;
    color: #6b6b6b;
    cursor: pointer;
    margin-right: 20px;
    outline: none;

      span {
        margin-right: 10px;
        color: #6b6b6b;
        pointer-events: none;
      }

      a {
        color: #fff;
        text-decoration: none;
      }
    }
    .register {
        color: #fff;
        text-decoration: none;
        background-color: #ff6c5a;
        background-image: linear-gradient(45deg, #ff6c5a 0%, #fe2a7b 81%);
      }
  }
`

const Header = ({setCategory, category, setSearch, search, setPeoples}) => {

  const ele = document.querySelector('.wrapperButtons')
  
  const handleCategory = (e) => {
    if(e.target.name === category){
      setCategory('')
      console.log(ele.children);
      ele.children[0].classList.remove('Female') 
      ele.children[1].classList.remove('Male') 
    } else if(e.target.name === 'Female' ) {
      setCategory(e.target.name)
      e.target.classList.add(e.target.name)
      
      if(ele.children[1].classList.contains('Male')) {
        ele.children[1].classList.remove('Male') 
      }
     
    } else {
      setCategory(e.target.name)
      e.target.classList.add(e.target.name)

      if(ele.children[0].classList.contains('Female')) {
        ele.children[0].classList.remove('Female') 
      }
    }
  }
  
  const handleSearch = (e) => {
    setSearch(e.target.value.replace( /(^|\s)([a-z])/g , (m,p1,p2) =>  p1+p2.toUpperCase()))
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/people?firstName=${search}`)
    .then((response) => response.json())
    .then(data => setPeoples(data.data))
    .catch(error => console.log(error))
  }

  return ( 
    <HeaderS>
      <img src={logo} alt=""/>
        <form className="wrapperSearch" onSubmit={handleSubmitSearch}>
          <input
            type="text"
            placeholder="search"
            onChange={handleSearch}
          />
        </form>
      <div className="wrapperButtons">
        <button name="Female" onClick={handleCategory}>
          <span className="material-icons">
            female
          </span>
          Female
        </button>

        <button name="Male" onClick={handleCategory}>
          <span className="material-icons">
            male
          </span>
          Male
        </button>

        <Link to="/register" className="register">
          Register
        </Link>
      </div>
    </HeaderS>
   );
}
 
export default Header;