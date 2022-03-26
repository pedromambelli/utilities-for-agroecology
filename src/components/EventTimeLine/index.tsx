import Timeline, {
  DateHeader,
  SidebarHeader,
  TimelineHeaders
} from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

import * as S from './styles'

const groups = Array.from(Array(14).keys()).map((e) => ({
  id: e + 1,
  title: 'Canteiro ' + (e + 1)
}))

const plantios = groups.map((el, idx) => ({
  id: el.id,
  group: el.id,
  title: 'Plantar tudo junto',
  start_time: moment().add(idx, 'week').add(1, 'day'),
  end_time: moment().add(1 + idx, 'week')
}))

// const replantios = groups.map((el, idx) => ({
//   id: 'replantio' + el.id,
//   group: el.id,
//   title: 'Replantar tudo junto',
//   start_time: moment()
//     .add(idx + 14, 'week')
//     .add(1, 'day'),
//   end_time: moment().add(1 + idx + 14, 'week')
// }))

const colheitasRabanete = groups.map((el, idx) => ({
  id: uuidv4(),
  group: el.id,
  title: 'Rabanete(Colher)',
  start_time: moment().add(idx + 4, 'week'),
  end_time: moment().add(1 + idx + 4, 'week'),
  className: 'green-marker'
}))

const colheitasAlface = groups.map((el, idx) => ({
  id: uuidv4(),
  group: el.id,
  title: 'Alface(Colher)',
  start_time: moment().add(idx + 7, 'week'),
  end_time: moment().add(1 + idx + 7, 'week'),
  className: 'green-marker'
}))

const colheitasCouve = groups.map((el, idx) => ({
  id: uuidv4(),
  group: el.id,
  title: 'Couve(Colher)',
  start_time: moment().add(idx + 9, 'week'),
  end_time: moment().add(1 + idx + 9, 'week'),
  className: 'green-marker'
}))

const colheitasMilho = groups.map((el, idx) => ({
  id: uuidv4(),
  group: el.id,
  title: 'Milho(Colher)',
  start_time: moment().add(idx + 13, 'week'),
  end_time: moment().add(1 + idx + 13, 'week'),
  className: 'green-marker'
}))

const items = [
  ...plantios,
  ...colheitasRabanete,
  ...colheitasAlface,
  ...colheitasCouve,
  ...colheitasMilho
]

const replantedItems = [...items].map((item) => {
  const { start_time, end_time, id, ...rest } = item
  const newItem = {
    start_time: moment(start_time).add(14, 'week'),
    end_time: moment(end_time).add(14, 'week'),
    id: 'replant_' + id,
    ...rest
  }
  return newItem
})

const EventTimeLine = () => (
  <S.TimeLineContainer>
    <Timeline
      groups={groups}
      items={[...items, ...replantedItems]}
      defaultTimeStart={moment().add(-1, 'week')}
      defaultTimeEnd={moment().add(8, 'week')}
    >
      <TimelineHeaders>
        <SidebarHeader>
          {({ getRootProps }) => {
            return (
              <div {...getRootProps()}>
                <S.SidebarHeader>
                  <h2>Canteiros</h2>
                </S.SidebarHeader>
              </div>
            )
          }}
        </SidebarHeader>
        <DateHeader unit="primaryHeader" />
        <DateHeader />
      </TimelineHeaders>
    </Timeline>
  </S.TimeLineContainer>
)

export default EventTimeLine
