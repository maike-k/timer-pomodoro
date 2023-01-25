import styled from "styled-components";


export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

// tipando a as minhas cores
interface ButtonContainerProps {
  color: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 40px;
`