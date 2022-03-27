import styled from 'styled-components'

export const Container = styled.div`
  color: var(--blackboard);
  font-size: var(--small);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  text-align: center;

  h1 {
    margin-bottom: var(--small);
  }
`

export const Title = styled.h1`
  text-decoration: underline;
  /* background-color: var(--sky); */
  font-weight: bold;
  padding: 0.5rem;
  margin: 1rem;
  font-size: var(--medium);
`
export const FormCard = styled(Container)`
  display: flex;
  min-width: 0;

  padding: var(--small);
  background-color: #fff;
  grid-area: input;
  justify-items: stretch;
`
export const OutputCard = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: var(--small);
  background-color: #fff;
  grid-area: output;
  overflow-y: hidden;
`

export const TimeLineWrapper = styled(Container)`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  border: solid 2px var(--sky);
`

export const FormLine = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 10% 40% 20% 20%;
  /* width: 100%; */
  flex-direction: row;
  /* align-items: stretch; */
  /* justify-content: space-between; */
  align-items: bottom;
  padding-bottom: var(--micro);

  h2 {
    font-size: var(--small);
  }
`
export const DeleteLineButton = styled.button`
  border: 0;
  width: 32px;
  height: 2rem;
  margin-bottom: auto;
  margin-top: auto;
  background-color: transparent;
  font-size: var(--small);
  align-items: center;
  &:hover {
    cursor: pointer;
    font-size: 2rem;
    color: var(--watermelon);
  }
`

export const AddEspecieButton = styled.button`
  background-color: var(--watermelon);
  color: var(--neutral);

  &:hover {
    color: #fff;
    padding: var(--micro);
    font-weight: bold;
  }
`
export const SummaryLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: var(--watermelon);
  padding: var(--micro);
  strong {
    color: var(--blackboard);
  }
  h3 {
    background-color: var(--sky);
    padding: var(--micro);
  }
`

export const Body = styled.div`
  display: grid;
  width: 100%;
  height: 85%;
  padding: var(--small);
  /* grid-template-rows: 1fr; */
  grid-template-columns: 30% 70%;
  grid-template-areas: 'input output';
  text-align: center;
  grid-gap: 0.5rem;
`
