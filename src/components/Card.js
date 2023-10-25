import React from 'react';
import styled from 'styled-components';

const Contents = styled.section`
  .card{
    font-size:1.3rem;
    padding:1rem;
    display: flex;
    flex-direction: column;
    overflow:auto;
    height:calc(100vh - 15rem);
  }
  .card ul{
    display: flex;
    flex-wrap: wrap;
  }
  .card .card_item{
    border-radius:1rem;
    margin-bottom:2rem;
    overflow:hidden;
    background-color:#fff;
    box-shadow: 0 0 10px #c7c7c7;
    flex: 1 calc(50% - 2rem);
    margin: 1rem;  
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card .card_item_info{
    padding:2rem
  }
  .card .card_item_info strong{
    font-size:1.8rem;
    font-weight:bold;
  }
  .card .card_item_info span{
    display:block;
    margin-top:1rem
  }
  .card .card_item_btn{
    width:100%;
    display:flex;
    justify-content: space-between;
  }
  .card .card_item_btn button{
    flex:1 50%;
    height:3.5rem;
    background-color:#fff;
    color:#333;
    font-weight:bold;
    font-size:1.2rem;
    border-left:1px solid #ddd;
    border-top:1px solid #ddd;
    cursor:pointer;
  }
  .card .card_item_btn button:first-child{
    border-left:0
  }
`;

const ListItem = React.memo(({mise}) => {
  if (mise.pm10Value > 0 && mise.pm10Value <= 30) {
    //$pm10ValueH1.style.color = "blue";
  } else if (mise.pm10Value > 30 && mise.pm10Value <= 80) {
   // $pm10ValueH1.style.color = "green";
  } else if (mise.pm10Value > 80 && mise.pm10Value <= 150) {
    //$pm10ValueH1.style.color = "orange";
  } else {
    //$pm10ValueH1.style.color = "red";
  }

  return(
    <li className='card_item'>
      <div className='card_item_info'> 
        <strong>{mise.sidoName} / {mise.stationName}</strong><br/>
        <span>미세먼지 농도 : {mise.pm10Value}</span>
        <span>측정시간 : {mise.dataTime}</span>
      </div>
      <div className='card_item_btn'>
        <button type="button">즐겨찾기 등록</button>
        <button type="button">즐겨찾기 해제</button>
      </div>
    </li>
  )
})

const List = React.memo(({miseInfo}) => {
  return(
    <ul>
      {miseInfo.map( mise => {
        return(
          <ListItem mise={mise} />
        )
      })}
    </ul>
  )
})

const Card = ({message, miseInfo}) =>{
 

  return (
    <Contents>
      <div className='card'>
        <h1>{message}</h1>
        <List miseInfo={miseInfo}/>
      </div>
    </Contents>
  )
}

export default Card;

