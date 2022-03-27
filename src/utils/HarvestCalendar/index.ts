import { Especie } from '@App/types'

class HarvestCalendar {
  private cicloCompleto
  private variedadeEspecies
  private numeroCanteiros
  constructor(private especieList: Especie[]) {
    this.cicloCompleto = Math.max(...this.especieList.map((e) => e.ciclo || 0))
    this.variedadeEspecies = this.especieList.length
    this.numeroCanteiros = Math.ceil(this.cicloCompleto / 7) + 1
  }
  getEspecieList() {
    return [...this.especieList]
  }
  getSummary() {
    return {
      cicloCompleto: this.cicloCompleto,
      variedadeEspecies: this.variedadeEspecies,
      numeroCanteiros: this.numeroCanteiros
    }
  }
  getWeeklySchedule() {
    const numberOfWeeks = this.numeroCanteiros * 2 + 1
    const emptyWeeks = Array.from(Array(numberOfWeeks).keys())
    const weeklySchedule = emptyWeeks.map((index) => {
      const actionList = []
      const canteiroAPlantar = index % this.numeroCanteiros
      actionList.push({
        tipo: 'Plantar',
        especie: 'Tudo',
        local: canteiroAPlantar
      })

      this.especieList.map((especie) => {
        const cicloSemanas = Math.ceil((especie.ciclo || 0) / 7)
        if (index >= cicloSemanas) {
          const canteiroAColher = (index - cicloSemanas) % this.numeroCanteiros
          actionList.push({
            tipo: 'Colher',
            especie: especie.nome,
            local: canteiroAColher
          })
        }
      })

      return actionList
    })

    return weeklySchedule
  }
}

export default HarvestCalendar
