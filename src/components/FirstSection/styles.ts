import styled from 'styled-components';

export const Background = styled.section`
  max-width: 100vw;
  min-height: 60vh;

  background: url(assets/image-hero-desktop.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 580px) {
    background: url(assets/image-hero-mobile.jpg);
  }
`;
