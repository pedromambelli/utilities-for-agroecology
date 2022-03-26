import * as S from './styles'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

type Evento = {
  semana: number
  tipo: string
  titulo: string
}

type WeekTimeLineProps = {
  schedule: Evento[]
}

const WeekTimeLine = ({ schedule = [] }: WeekTimeLineProps) => (
  <VerticalTimeline lineColor="#a9a9a9" layout="2-columns">
    {schedule.map(({ titulo, semana }, index) => (
      <VerticalTimelineElement
        key={`evento_${index}`}
        className="vertical-timeline-element--work"
        contentStyle={{ border: 'solid #efefef' }}
        contentArrowStyle={{ borderRight: '7px solid #565656' }}
        // date="2011 - present"
        iconStyle={{ background: '#caebf2', color: '#ff3b3f' }}
        // icon={<S.NumberIcon>{semana + 1}</S.NumberIcon>}
      >
        <h3 className="vertical-timeline-element-title">{titulo}</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <S.StatsGroup>
          <S.Stat>
            <strong>Ação</strong>
            <strong>Espécie(s)</strong>
            <strong>Local</strong>
          </S.Stat>
          <S.Stat>
            <div>Plantar</div>
            <div>Tudo</div>
            <div>Canteiro {semana + 1}</div>
          </S.Stat>
          <S.Stat>
            <div>Colher</div>
            <div>Rabanete</div>
            <div>-----</div>
          </S.Stat>
          <S.Stat>
            <div>Colher</div>
            <div>Alface</div>
            <div>-----</div>
          </S.Stat>
          <S.Stat>
            <div>Colher</div>
            <div>Couve</div>
            <div>-----</div>
          </S.Stat>
          <S.Stat>
            <div>Colher</div>
            <div>Milho</div>
            <div>-----</div>
          </S.Stat>
        </S.StatsGroup>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
)

export default WeekTimeLine
