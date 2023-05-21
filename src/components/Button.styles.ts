import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: '#def44c',
  secondary: '#956cda',
  success: '#123dab',
  danger: '#879cda'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width:100px;
height:40px;
border-radius:5px;
margin-right: 5px;
border: none;

color: ${props => props.theme['gray-300']};
background: ${(props) => props.theme["green-500"]}
`

