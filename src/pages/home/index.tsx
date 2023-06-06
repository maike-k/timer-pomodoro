// Cada página é um component, dentro da minha apliacação.
import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer, Start, Stop } from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { CyclesContext } from '../../context/CyclesContext'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
  const { InterruptCurrentCycle, CreateNewCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    console.log(CreateNewCycle)
    CreateNewCycle(data)
    reset()
  }

  const { watch, handleSubmit, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <Stop type="button" onClick={InterruptCurrentCycle}>
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
