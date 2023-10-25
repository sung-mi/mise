import React from 'react';
import styled from 'styled-components';

const Card = () =>{

  return (
    <Contents>
      <div className='card'>
        <ul>
          <li className='card_item'>
            <div className='card_item_info'>
              정보입력
            </div>
            <div className='card_item_btn'>
              <button>즐겨찾기 등록</button>
              <button>즐겨찾기 해제</button>
            </div>

          </li>
          <li className='card_item'>
            <div className='card_item_info'>
              정보입력
            </div>
            <div className='card_item_btn'>
              <button>즐겨찾기 등록</button>
              <button>즐겨찾기 해제</button>
            </div>

          </li>
        </ul>
        
      </div>
    </Contents>
  )
}

export default Card;

const Contents = styled.section`
  

  .card{
    margin:1rem;
    font-size:1.3rem;
    padding:1rem;
    display: flex;
    flex-direction: column;
    overflow:auto;
    height:calc(100vh - 15rem);
  }

  .card .card_item{
    border-radius:1rem;
    margin-bottom:2rem;
    overflow:hidden;
    background-color:#fff;
    box-shadow: 0 0 10px #c7c7c7;
  }

  .card .card_item_btn{
    width:100%;
    display:flex;
    justify-content: space-between;
  }

  .card .card_item_btn button{
    flex:1 50%;
    height:3.5rem;
    background-color:#8a25cd;
    color:#fff;
    font-weight:bold;
    font-size:1.2rem;
    border-left:1px solid rgba(255,255,255,0.4);
    cursor:pointer;
  }
  .card .card_item_btn button:first-child{
    border-left:0
  }

  .card .card_item_info{
    padding:2rem
  }
`;