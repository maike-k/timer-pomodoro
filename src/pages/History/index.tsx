import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status, Table } from './styles'
import { CyclesContext } from '../../context/CyclesContext'
import ptBR from 'date-fns/locale/pt-BR'

import { formatDistanceToNow, parseISO } from 'date-fns'
export const History = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <Table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(task => {
              return (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>Há {task.minutesAmounts} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(task.starDate), {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </td>
                  <td>
                    {task.finishedDate && (
                      <Status StatusColor="green">Concluído</Status>
                    )}

                    {task.interruptedDate && (
                      <Status StatusColor="red">Interrompido</Status>
                    )}

                    {!task.finishedDate && !task.interruptedDate && (
                      <Status StatusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </HistoryList>
    </HistoryContainer>
  )
}
