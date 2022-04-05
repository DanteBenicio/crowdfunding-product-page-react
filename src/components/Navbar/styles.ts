import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 6rem;
  margin-bottom: -6rem;

  max-width: 100vw;
  min-height: 4rem;
  background-color: transparent;
`;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BurgerMenu = styled.button`
  display: none;
  width: ${({ theme }) => theme.pixelToRem(35)};
  height: ${({ theme }) => theme.pixelToRem(30)};
  background-color: transparent;
  border: none;

  > img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoWrapper = styled.div`
`;

export const Logo = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  list-style: none;

  > li {
    font-weight: ${({ theme }) => theme.fontWeights.medium};

    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(90%);
    }
  }
`;
