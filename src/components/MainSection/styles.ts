import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  padding: 0 2rem;

  background-color: #efefef;
`;

export const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.pixelToRem(700)};
  height: 100%;
`;
