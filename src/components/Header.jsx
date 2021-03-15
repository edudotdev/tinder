import React from 'react'
import logo from '../img/logo.png'

import styled from 'styled-components'

const HeaderS = styled.header`
  background: #fff;
  display: grid;
  grid-template-columns: 60px 2fr 1fr;  
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

    button {
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
    }
  }
`

const Header = ({setCategory, category, setSearch}) => {

  const ele = document.querySelector('.wrapperButtons')

  const handleCategory = (e) => {
    if(e.target.name === category){
      setCategory('')
      ele.firstChild.classList.remove('Female') 
      ele.lastChild.classList.remove('Male') 
    } else if(e.target.name === 'Female' ) {
      setCategory(e.target.name)
      e.target.classList.add(e.target.name)
      
      if(ele.lastChild.classList.contains('Male')) {
        ele.lastChild.classList.remove('Male') 
      }
     
    } else {
      setCategory(e.target.name)
      e.target.classList.add(e.target.name)

      if(ele.firstChild.classList.contains('Female')) {
        ele.firstChild.classList.remove('Female') 
      }
    }
  }
  
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value.replace( /(^|\s)([a-z])/g , (m,p1,p2) =>  p1+p2.toUpperCase()))
  }

  

  return ( 
    <HeaderS>
      <img src={logo} alt=""/>
        <form className="wrapperSearch" >
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
      </div>
    </HeaderS>
   );
}
 
export default Header;