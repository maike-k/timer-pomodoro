// Cada página é um component, dentro da minha apliacação.
import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer, Start, Stop } from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'
import { createContext, useContext, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

interface Cycle {
  // Typescript: Cycle da aplicação
  id: string
  task: string
  minutesAmounts: number
  starDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextTypeProps {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextTypeProps)
const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { watch, handleSubmit, reset } = newCycleForm

  const markCurrentCycleAsFinished = () => {
    setCycles(state => {
      return state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      })
    })
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    // Criando Cycles
    // Remova o atributo data.

    const id = String(new Date().getTime())
    const newCycles: Cycle = {
      id,
      task: data.task,
      minutesAmounts: data.minutesAmount,
      starDate: new Date()
    }

    setCycles(state => [...state, newCycles])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  // Stop Cycle
  const handleInterruptCycle = () => {
    setCycles(state =>
      state.map(function (cycle) {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      })
    )
    setActiveCycleId(null)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <Stop type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} /> Interromper
          </Stop>
        ) : (
          <Start type="submit" disabled={isSubmitDisabled}>
            <Play size={24} /> Start
          </Start>
        )}
      </form>
    </HomeContainer>
  )
}
