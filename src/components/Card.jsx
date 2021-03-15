import React from 'react'

import styled from 'styled-components'

const CardS = styled.div`
  background: #fff;
  border-radius: 30px;
  overflow: hidden;
  padding: 5px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px 1px rgba(0, 0, 0, .04);
  }
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;
  border-radius: 30px;

  img {
    position: absolute;
    width: 100%;
    height: auto;
  }
`

const Info = styled.div`
  padding: 10px;

  span {
    font-weight: 600;
    display: block; 
    color: #2f2f2f;
    font-size: 18px;
  }

  .about {
    /* padding: 10px; */
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: #b0b0b0;
    border-radius: 30px;
    padding: 3px 10px;
    /* margin-left: 35px;
    margin-top: 20px; */

    /* &::before {
      content: 'About';
      position: absolute;
      left: -35px;
      top: -10px;
      color: #ff0836;
      background: #ffbbbb;
      padding: 3px 5px;
      font-size:10px;
      border-radius: 99px;
    } */
  }

  .gender {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 30px;
    width: 80px;
    margin: 10px 0;

    span, p {
      display: inline-block;
      padding-right: 5px;
    }
  }
`

const Card = ({people}) => {

  const {firstName, lastName, age, gender, preferences, description, image} = people

  return ( 
    <CardS>
      <ImageWrapper>
        <img src={image} alt=""/>
      </ImageWrapper>

      <Info>
        <span>{firstName} {lastName}, {age}</span>
     
        <div className={`gender ${gender}`}>
          <span className="material-icons">
            {gender === 'Female' 
              ? 
                'female'

              :
                'male'
            }
          </span>
          <p>{gender}</p>
        </div>

        <div className="about">
          {description}
        </div>
      </Info>
    </CardS>
   );
}

export default Card;