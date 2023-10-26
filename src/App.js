import styled from 'styled-components';
import Loca from './components/Loca'
import Card from './components/Card'
import Tap from './components/Tap'
import miseData_ from './api/data.json'


function App() {

  const miseInfo = miseData_.response.body.items;

  return (
    <Container>
      <Loca miseInfo={miseInfo}/>
      <Card miseInfo={miseInfo}/>
      <Tap miseInfo={miseInfo}/>
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