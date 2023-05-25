import { HistoryContainer, HistoryList, Status, Table } from './styles'
export const History = () => {
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
            <tr>
              <td>Terefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status StatusColor="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Terefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status StatusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Terefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status StatusColor="yellow">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Terefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status StatusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </Table>
      </HistoryList>
    </HistoryContainer>
  )
}
