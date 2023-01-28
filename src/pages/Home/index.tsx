import { Play } from 'phosphor-react'

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAllowed,
  Separator,
  StartCountDownButton,
  TaskInput
} from './styles'
export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task_suggestion"
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="task_suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Banana" />
            <option value="Maça" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAllowed
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton type="submit">
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
