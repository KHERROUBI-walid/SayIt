import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <StyledWrapper>
      <div className="container">  
        <input className="label-check" id="label-check" type="checkbox" />
        <label htmlFor="label-check" className="hamburger-label">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
          <label /></label></div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .label-check {
    display: none;
  }

  .hamburger-label {
   
    width: 45px;
    height: 40px;
    display: block;
    cursor: pointer;
  }

  .hamburger-label div {
    width: 40px;
    height: 6px;
    background-color: #fff;
    position: absolute;
  }

  .line1 {
    transition: all .3s;
  }

  .line2 {
    margin: 18px 0 0 0;
    transition: 0.3s;
  }

  .line3 {
    margin: 36px 0 0 0;
    transition: 0.3s;
  }

  #label-check:checked + .hamburger-label .line1 {
    transform: rotate(-35deg) scaleX(-.55) translate(39px, -4.5px);
    border-radius: 50px 50px 50px 0;
    width:50px;
  }

  #label-check:checked + .hamburger-label .line3 {
    transform: rotate(35deg) scaleX(-.55) translate(39px, 4.5px);
    border-radius: 0 50px 50px 50px;
    width:50px;
  }

  #label-check:checked + .hamburger-label .line2 {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 45px;
  }`;

export default Main;
