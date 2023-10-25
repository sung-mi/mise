import styled from 'styled-components';
import Loca from './components/Loca'
import Card from './components/Card'
import Tap from './components/Tap'
import A from './components/A'
import miseData from './api/data.json'
import { useEffect, useState } from 'react';


// console.log(miseData);
// console.log(miseData.response.body.items[0].sidoName)
// const misedata = JSON.stringify(miseData)
// console.log(misedata)

function App() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => setPosts(posts));
  },[]);

  console.log(posts);

  return (
    <Container>
      <input 
      value={value}
      onChange={e=>setValue(e.target.value)}
      />
      <Loca />
      <Card message={value} posts={posts}/>
      <Tap message={value} posts={posts}/>
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