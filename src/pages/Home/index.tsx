import { Play } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAllowed,
  Separator,
  StartCountDownButton,
  TaskInput
} from './styles'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de máximo de 60 minutos')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount
    }

    setCycles(state => [...state, newCycle])
    setActiveCycleId(id)
    reset()
  }

  console.log(activeCycle)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task_suggestion"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
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
            {...register('minutesAmount', {
              valueAsNumber: true
            })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[0]}</span>
        </CountDownContainer>
        <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}

// O typescript, não aceita receber diretamente uma variável Javascript.
// Sempre que for preciso referenciar uma variável dentro do Typescript, eu irei usar o Typeof.

// Controled
//  É quando eu mantenho em tempo real , a informação do usuário, dentro da minha variável.
// Uncontroled
//  Buscamos o valor da informação do input, apenas quando precisamos dela.

// function register(name: string) { Devolve várias funções para que eu possa trabalhar com os meus inputs }
// sempre que eu precisar fazer algum tipo de alteração, dentro da minha aplicação, eu vou fazer isso através da sua mudança de Estado.
