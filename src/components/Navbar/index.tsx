import {
  Container, Wrapper, LogoWrapper, Logo, List,
} from './styles';

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src="assets/logo.svg" alt="text writted crowdfund" />
        </LogoWrapper>

        <List>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#1">Discover</a>
          </li>
          <li>
            <a href="#2">Get Started</a>
          </li>
        </List>
      </Wrapper>
    </Container>
  );
}
