import EventTable from 'components/auditor/EventTable'
import { useGetEventsQuery } from 'redux/main/mainApi'

const EventPanel = () => {
  const { data: events } = useGetEventsQuery()

  return (
    <div>
      <EventTable events={events} />
    </div>
  )
}

export default EventPanel
