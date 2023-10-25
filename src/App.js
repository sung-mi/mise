import styled from 'styled-components';
import Loca from './components/Loca'
import Card from './components/Card'
import Tap from './components/Tap'
import miseData_ from './api/data.json'
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [miseData, setMiseData] = useState([]);

  useEffect(() => {
    fetch("https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=M9LkotOBT3oPLQhQKxFKZQGyWVBnfXK6XPabt9r81hnu58sJDad6ZhiUkc%2BwiJnW5t4R9wzQy9oY4pLbDedfww%3D%3D&returnType=json&numOfRows=20&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0")
    .then(response => response.json())
    .then(miseData => {setMiseData(miseData)})
    .catch((error) => error);
  },[]);

  
// const miseInfo = miseData.response.body.items;
const miseInfo = miseData_.response.body.items;

  

  const search = (e)=>{      
    e.preventDefault();
    console.log(miseInfo);
  }

  return (
    <Container>
      
     
      <Loca miseInfo={miseInfo}/>
      <section>
        <button type='button' onClick={search} >Search</button>
        <input 
        value={value}
        onChange={e=>setValue(e.target.value)}
        />
        

      </section>
      <Card message={value} miseInfo={miseInfo}/>
      <Tap message={value} miseInfo={miseInfo}/>
      
    </Container>
  );
}



export default App;

const Container = styled.main`
  height:100%;
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between
`;