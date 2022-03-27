import { Event } from 'redux/main/types'

type Props = {
  events?: Event[]
}

const EventTable = ({ events = [] }: Props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Action</th>
          <th>Object</th>
          <th>Subject</th>
          <th>Path</th>
        </tr>
        {events.map((event) => {
          return (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.action}</td>
              <td>{event.object}</td>
              <td>{event.subject}</td>
              <td>{event.path}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default EventTable
