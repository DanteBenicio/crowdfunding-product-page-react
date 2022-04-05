import AboutThisProject from './AboutThisProject';
import MasterCraftStats from './MasterCraftStats';
import { Container, Wrapper } from './styles';

export default function MainSection() {
  return (
    <Container>
      <Wrapper>
        <MasterCraftStats />
        <AboutThisProject />
      </Wrapper>
    </Container>
  );
}
