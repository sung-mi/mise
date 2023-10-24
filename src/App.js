import styled from 'styled-components';
import Loca from './components/Loca'
import Card from './components/Card'
import Tap from './components/Tap'
import miseData from './api/data.json'


console.log(miseData);
console.log(miseData.response.body.items[0].sidoName)
// const misedata = JSON.stringify(miseData)
// console.log(misedata)

function App() {
  return (
    <Container>
      <Loca />
      <Card />
      <Tap />
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