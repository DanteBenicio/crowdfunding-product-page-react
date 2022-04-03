import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  max-width: 100vw;
  min-height: 110vh;
  height: 100%;
  width: 100%;

  background-color: rgba(0,0,0,0.4);
  z-index: 10;
  overflow-y: scroll;
`;

export const Content = styled.div`
  position: relative;
  padding: 3rem;
  margin: 2rem 0 6rem;
  max-width: ${({ theme }) => theme.pixelToRem(750)};
  background-color: white;
  border-radius: 0.5rem;

  > h2 {
    width: 100%;
    margin-bottom: 0.5rem;
    font-size: clamp(0.9rem, 5vw, 1.1rem);
  }

  > span {
    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;

    color: ${({ theme }) => theme.colors.neutral.darkGray};
    font-size: clamp(0.8rem, 5vw, 0.8rem);
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  > #close_modal {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 3%;
    right: 4%;
    display: inline-block;
    width: 15px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;
