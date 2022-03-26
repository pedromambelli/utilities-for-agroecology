import styled from 'styled-components'

export const Link = styled.div`
  font-size: var(--small);
  /* aspect-ratio: 1; */
  background-color: var(--sky);
  border-radius: var(--small);
  display: flex;
  align-items: center;
  margin: var(--small);
  a {
    color: var(--blackboard);
    text-decoration: none;
    padding-inline: var(--small);
  }

  a:hover {
    color: var(--watermelon);
  }
`
