import * as S from './styles'
export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Símbolo do react, átomo com coração no lugar do núcleo"
      />
      <S.Title>Boilerplate Nextjs</S.Title>
      <S.Description>
        Pequeno boilerplate configurado para criação rápida de projetos
        utilizando Nextjs, React e Styled-components
      </S.Description>
      <S.Illustration
        src="/img/illustration dev.png"
        alt="Desenho de um desenvolvedor de frente para uma tela"
      />
    </S.Wrapper>
  )
}
