import { useState } from 'react'
import * as S from './styles'

import { v4 as uuidv4 } from 'uuid'
// import EventTimeLine from '@App/components/EventTimeLine'
import { Especie } from '@App/types'
import WeekTimeLine from '@App/components/WeekTimeLine'
import HarvestCalendar from '@App/utils/HarvestCalendar'
// import HarvestCalendar from '@App/utils/HarvestCalendar'

const defaultConsortium = [
  { id: uuidv4(), nome: 'Rabanete', ciclo: 28, quantidade: 1 },
  { id: uuidv4(), nome: 'Alface', ciclo: 45, quantidade: 1 },
  { id: uuidv4(), nome: 'Couve', ciclo: 60, quantidade: 1 },
  { id: uuidv4(), nome: 'Milho', ciclo: 90, quantidade: 1 }
]

const ConsorcioTemplate = () => {
  const [especieList, setEspecieList] = useState<Especie[]>(defaultConsortium)
  const deleteClickHandler = (idx?: string) => {
    const trimedList = especieList.filter((value) => {
      console.log(value)
      return idx !== value.id
    })

    setEspecieList(trimedList)
  }
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    targetProp: string,
    id?: string
  ) => {
    const updatedList = especieList.map((especie) => {
      if (especie.id === id) especie[targetProp] = event.target.value
      return especie
    })
    setEspecieList(updatedList)
  }
  const { cicloCompleto, variedadeEspecies, numeroCanteiros } =
    new HarvestCalendar(especieList).getSummary()
  return (
    <S.Container>
      <S.Title>Calculadora de Consórcio</S.Title>
      <S.Body>
        <S.FormCard>
          <h1>Variáveis</h1>

          <S.FormLine>
            <h2></h2>
            <h2>Espécie</h2>
            <h2>Ciclo</h2>
            <h2>Qtde.</h2>
          </S.FormLine>
          {especieList.map((especie) => (
            <S.FormLine key={`input-group-${especie.id}`}>
              {/* <div> */}
              <S.DeleteLineButton
                onClick={() => deleteClickHandler(especie.id)}
              >
                x
              </S.DeleteLineButton>
              <input
                type="text"
                name={`input-nome-${especie.id}`}
                id={`input-id-${especie.id}`}
                placeholder="Nome da Espécie"
                value={especie.nome}
                onChange={(event) =>
                  handleInputChange(event, 'nome', especie.id)
                }
              />
              {/* </div> */}
              <input
                type="number"
                name=""
                id=""
                min={1}
                step={1}
                placeholder="Dias até a colheita"
                value={especie.ciclo}
                onChange={(event) =>
                  handleInputChange(event, 'ciclo', especie.id)
                }
              />
              <input
                type="number"
                name=""
                id=""
                min={1}
                step={1}
                placeholder="quantidade"
                value={especie.quantidade}
                onChange={(event) =>
                  handleInputChange(event, 'quantidade', especie.id)
                }
              />
            </S.FormLine>
          ))}
          <S.AddEspecieButton
            onClick={() =>
              setEspecieList([
                ...especieList,
                { id: uuidv4(), nome: `Exemplo`, ciclo: 1, quantidade: 1 }
              ])
            }
          >
            Adicionar Espécie
          </S.AddEspecieButton>
        </S.FormCard>
        <S.OutputCard>
          <h1>Cronograma</h1>
          <S.TimeLineWrapper>
            <WeekTimeLine especieList={especieList} />
          </S.TimeLineWrapper>
          <h1>Resumo</h1>
          <S.SummaryLine>
            <h3>
              <strong>Número de Espécies: </strong>
              {variedadeEspecies}
            </h3>
            <h3>
              <strong>Ciclo Completo: </strong>
              {cicloCompleto}
              <strong> dias</strong>
            </h3>
            <h3>
              <strong>Número de Canteiros: </strong>
              {numeroCanteiros}
            </h3>
          </S.SummaryLine>
        </S.OutputCard>
      </S.Body>
    </S.Container>
  )
}

export default ConsorcioTemplate
