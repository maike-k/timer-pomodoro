// Cada página é um component, dentro da minha apliacação.

import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  Start,
  TaskInput
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
          />
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" placeholder="00" />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <Start type="submit" disabled>
          <Play size={24} /> Start
        </Start>
      </form>
    </HomeContainer>
  )
}
