import styled from 'styled-components';
import Loca from './components/Loca'
import Card from './components/Card'
import Tap from './components/Tap'

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