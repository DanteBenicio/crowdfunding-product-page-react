import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  padding: 12rem 1rem 2rem;

  background-color: #efefef;

  @media screen and (max-width: 580px) {}
`;

export const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.pixelToRem(700)};
  width: 100%;
  height: 100%;
`;
