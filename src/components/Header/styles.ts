import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;
    box-shadow: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    color: ${(props) => props.theme['gray-100']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-300']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
