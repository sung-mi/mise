import React from 'react';
import styled from 'styled-components';

const Tap = ({miseInfo}) =>{
  return (
    <Footer>
      <button type="button">기본 지역 보기</button>
      <button type="button">전체 보기</button>
      <button type="button">즐겨찾기 지역 보기</button>
    </Footer>
  )
}

export default Tap;

const Footer = styled.section`
  width:100%;
  height:5rem;
  display:flex;
  justify-content: space-between;

  button{
    flex:1 auto;
    border:1px solid #333;
    border-right:0;
    font-size:1.4rem;
    font-weight:bold;
    background:#000;
    color:#fff;
    cursor:pointer
  }
  button:first-child{
    border-left:0
  }
`;

