import styled from 'styled-components'

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
  
  &::-webkit-calendar-picker-indicator {
  display: none !important;
  }
`

export const MinutesAmountInput = styled(baseInput)`
  width: 4rem;
`

