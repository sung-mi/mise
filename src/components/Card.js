import React from 'react';
import styled from 'styled-components';

const Card = () =>{

  return (
    <Contents>
      <div className='card'>
        <div className='card_info'>
        정보입력
        </div>
        <div className='card_btn'>
          <button>즐겨찾기 등록</button>
          <button>즐겨찾기 해제</button>
        </div>
      </div>
    </Contents>
  )
}

export default Card;

const Contents = styled.section`
  margin:1rem;

  .card{
    font-size:1.3rem;
    border-radius:1rem;
    background-color:pink;
    display: flex;
    flex-direction: column;
    overflow:hidden
  }

  .card .card_info{
    min-height:calc(100vh - 20rem);
    padding:2rem;
  }

  .card .card_btn{
    width:100%;
    display:flex;
    justify-content: space-between;
  }

  .card .card_btn button{
    flex:1 50%;
    height:3.5rem;
    background-color:rgba(0,0,0,0.5);
    color:#fff;
    font-weight:bold;
    font-size:1.2rem;
    border-left:1px solid rgba(255,255,255,0.4);
    cursor:pointer;
  }
  .card .card_btn button:first-child{
    border-left:0
  }

  .card .card_info{
    
  }
`;