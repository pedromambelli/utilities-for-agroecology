import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: var(--neutral);
  color: var(--carbon);
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Logo = styled.img`
  width: min(13rem, 100%);
`

export const Title = styled.h1``

export const Description = styled.h2`
  font-weight: 300;
  width: min(30rem, 100%);
  margin-bottom: 3rem;
`

export const Illustration = styled.img`
  width: min(11rem, 100%);
`

export const HorizontalStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  div {
    margin-left: var(--small);
  }
`
export const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  div {
    margin-left: var(--small);
  }
`
