import { Especie } from '@App/types'

class HarvestCalendar {
  constructor(private especieList: Especie[]) {}
  getEspecieList() {
    return [...this.especieList]
  }
}

export default HarvestCalendar
