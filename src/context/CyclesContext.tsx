import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState
} from 'react'
import { Cycle, cyclesReducer } from '../Reducer/cycles/reducer'
import {
  ActionTypes,
  InterruptCurrentCycleAction,
  MarkCurrentCyclesAsFinishedAction,
  addNewCycleActionAction
} from '../Reducer/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
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

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export const CyclesContext = createContext({} as CyclesContextTypeProps)

export const CyclesContextProvider = ({
  children
}: ContextCyclesProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null
    },
    initialState => {
      const storedStateJSON = localStorage.getItem('@ignite-timer:cycles-state')

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return initialState
    }
  )

  const { activeCycleId, cycles } = cyclesState
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.starDate))
    }

    return 0
  })

  const markCurrentCycleAsFinished = () => {
    dispatch(MarkCurrentCyclesAsFinishedAction())
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const CreateNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmounts: data.minutesAmount,
      starDate: new Date()
    }

    dispatch(addNewCycleActionAction(newCycle))

    setAmountSecondsPassed(0)
  }

  // Stop Cycle
  const InterruptCurrentCycle = () => {
    dispatch(InterruptCurrentCycleAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState, null, 2)
    localStorage.setItem('@ignite-timer:cycles-state', stateJSON)
    console.log(stateJSON)
  }, [cyclesState])

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
