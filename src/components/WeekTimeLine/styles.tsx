import styled from 'styled-components'

export const NumberIcon = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-content: center;

  h2 {
    margin: auto;
  }
`

export const StatsGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--small);
  /* text-align: left; */
  /* align-items: center; */
  /* justify-content: 'center'; */
`
export const Stat = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin: 0.5rem;
`
