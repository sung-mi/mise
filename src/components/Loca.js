import React from 'react';
import styled from 'styled-components';
const Header = styled.section`
  height:5rem;
  
  background: linear-gradient(to left, #178844, #178844, #3496fe);
  position:relative;

  h1{
    padding-left:1.8rem;
    line-height:5rem;
    color:#fff;
    font-size:1.5rem
  }

  select{
    color: #007980;
    height:3rem;
    padding:0 0.5rem;
    border-radius:0.3rem;
    1px solid #04555a;
    position:absolute;top:1rem;right:1rem;
    font-size:1.3rem;font-weight:bold
  }
`;
function Loca() {
  return (
    <Header>
      <h1>▒ 미세먼지 알리미 ▒</h1>
      <select>
        <option>서울</option>
        <option>인천</option>
      </select>
    </Header>
  )
}

export default Loca;

