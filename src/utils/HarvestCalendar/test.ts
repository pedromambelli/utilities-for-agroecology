import HarvestCalendar from '.'

describe('HarvestCalendar', () => {
  it('should keep a especieList, passed in constructor', () => {
    const especieList = [{ nome: 'Especie 1', ciclo: 28, quantidade: 20 }]
    const harvestCalendar = new HarvestCalendar(especieList)

    expect(harvestCalendar.getEspecieList()).toEqual(especieList)
  })
  it('HarvestCalendar.getSummary should return an summary with relevant info', () => {
    const especieList = [
      { nome: 'Especie 1', ciclo: 28, quantidade: 20 },
      { nome: 'Especie 2', ciclo: 45, quantidade: 20 }
    ]
    const harvestCalendar = new HarvestCalendar(especieList)

    expect(harvestCalendar.getSummary()).toHaveProperty('cicloCompleto')
    expect(harvestCalendar.getSummary()['cicloCompleto']).toEqual(45)

    expect(harvestCalendar.getSummary()).toHaveProperty('variedadeEspecies')
    expect(harvestCalendar.getSummary()['variedadeEspecies']).toEqual(2)

    expect(harvestCalendar.getSummary()).toHaveProperty('numeroCanteiros')
    expect(harvestCalendar.getSummary()['numeroCanteiros']).toEqual(8)
  })

  it('HarvestCalendar.getWeeklySchedule shoul return event list with right size', () => {
    const especieList = [
      { nome: 'Especie 1', ciclo: 28, quantidade: 20 },
      { nome: 'Especie 2', ciclo: 45, quantidade: 20 },
      { nome: 'Especie 2', ciclo: 60, quantidade: 20 },
      { nome: 'Especie 2', ciclo: 90, quantidade: 20 }
    ]
    const harvestCalendar = new HarvestCalendar(especieList)
    console.log(harvestCalendar.getSummary())
    console.log(harvestCalendar.getWeeklySchedule())
    expect(harvestCalendar.getWeeklySchedule()).toHaveLength(29)
  })
})
