import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }

`

export const FormContainer = styled.div`

  width: 100%;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.125rem;

`

const baseInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 3px solid ${(props) => props.theme['gray-500']};
  height:2.5rem;
  font-weight: bold;
  font-size:1.12rem;
  padding: 0 .2rem ;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    border-color: ${(props) => props.theme['gray-500']}
  }

`

export const TaskInput = styled(baseInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(baseInput)`
  width: 4rem;
`

export const CountDownContainer = styled.div`

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
  padding: 2rem 1rem;
  background: ${props => props.theme['gray-700']};
  border-radius: 8px;
  }

`

export const Separator = styled.div`
  background: transparent;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

`


export const Start = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 4rem;
  border-radius: 8px;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  border: none;
  cursor: pointer;
  transition:  0.5s;
  font-weight: bold;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

`