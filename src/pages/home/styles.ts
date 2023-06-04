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

const BaseButton = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 4rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition:  0.5s;
  font-weight: bold;

`
export const Start = styled(BaseButton)`
 
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

`

export const Stop = styled(BaseButton)`

  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['white']};


  &:hover {
    background: ${(props) => props.theme['red-700']}
  }
`






