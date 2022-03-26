import HarvestCalendar from '.'

describe('HarvestCalendar.parseEspecieList', () => {
  it('should keep a especieList, passed in constructor', () => {
    const especieList = [{ nome: 'Especie 1', ciclo: 28, quantidade: 20 }]
    const harvestCalendar = new HarvestCalendar(especieList)

    expect(harvestCalendar.getEspecieList()).toEqual(especieList)
  })
})
