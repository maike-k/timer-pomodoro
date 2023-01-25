import styled, { css } from "styled-components";


export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

// tipando a as minhas cores
interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 40px;
border:0;
border-radius: 5px;
margin-right: 5px;

background-color:  ${props => props.theme.secondary};
color: ${props => props.theme.color}

/* ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }} */
`