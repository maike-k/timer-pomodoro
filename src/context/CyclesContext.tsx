import { ReactNode, createContext, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

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
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  CreateNewCycle: (data: CreateCycleData) => void
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  InterruptCurrentCycle: () => void
}

interface ContextCyclesProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextTypeProps)

export const CyclesContextProvider = ({
  children
}: ContextCyclesProviderProps) => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

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

  const CreateNewCycle = (data: CreateCycleData) => {
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
  }

  // Stop Cycle
  const InterruptCurrentCycle = () => {
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

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        CreateNewCycle,
        InterruptCurrentCycle
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
