import * as S from './styles'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import HarvestCalendar from '@App/utils/HarvestCalendar'
import { Especie } from '@App/types'

type WeekTimeLineProps = {
  especieList: Especie[]
}

const WeekTimeLine = ({ especieList = [] }: WeekTimeLineProps) => {
  const schedule = new HarvestCalendar(especieList).getWeeklySchedule()
  return (
    <VerticalTimeline lineColor="#efefef" layout="1-column">
      {schedule.map((semana, index) => (
        <VerticalTimelineElement
          key={`evento_${index}`}
          className="vertical-timeline-element--work"
          contentStyle={{ border: 'solid #efefef', background: '#fafafa' }}
          contentArrowStyle={{ borderRight: '7px solid #565656' }}
          // date="2011 - present"
          iconStyle={{ background: '#caebf2', color: '#565656' }}
          icon={
            <S.NumberIcon>
              <h2>{index + 1}</h2>
            </S.NumberIcon>
          }
        >
          <h3 className="vertical-timeline-element-title">
            {'Semana: ' + (index + 1)}
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <S.StatsGroup>
            <S.Stat>
              <strong>Ação</strong>
              <strong>Espécie(s)</strong>
              <strong>Local</strong>
            </S.Stat>
            {semana.map(({ tipo, especie, local }, idx) => {
              console.log(semana)
              return (
                <S.Stat key={`stat_${idx}`}>
                  <div>{tipo}</div>
                  <div>{especie}</div>
                  <div>{`Canteiro ${local + 1}`}</div>
                </S.Stat>
              )
            })}
          </S.StatsGroup>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default WeekTimeLine
