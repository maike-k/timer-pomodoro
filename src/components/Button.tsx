import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  color: ButtonVariant
}

export const Button = ({ color }: ButtonProps) => {
  return <ButtonContainer variant={color}>Enviar</ButtonContainer>
}
