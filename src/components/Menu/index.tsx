import { Overlay, Container } from './styles';

export default function Menu() {
  return (
    <Overlay>
      <Container>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#discover">Discover</a>
        </li>
        <li>
          <a href="#get-started">Get Started</a>
        </li>
      </Container>
    </Overlay>
  );
}
