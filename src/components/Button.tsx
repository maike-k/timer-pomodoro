import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant: ButtonVariant
}

export function Button({ variant }: ButtonProps) {
  return <ButtonContainer color={variant}>Enviar</ButtonContainer>
}
