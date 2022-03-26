import LinkWrapper from '@App/components/LinkWrapper'
import * as S from './styles'
export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Símbolo do react, átomo com coração no lugar do núcleo"
      />
      <S.Title>Calculadora Agroflorestal</S.Title>
      <S.Description>
        Pequenos serviços para auxiliar cálculos agroflorestais específicos
      </S.Description>
      <S.HorizontalStack>
        <S.Illustration
          src="/img/farmer.png"
          alt="Desenho de um desenvolvedor de frente para uma tela"
        />
        <S.VerticalStack>
          <LinkWrapper href="/consorcio">Cronograma para Consórcio</LinkWrapper>
          {/* <LinkWrapper href="#">Mandala</LinkWrapper>
          <LinkWrapper href="#">Perenes</LinkWrapper>
          <LinkWrapper href="#">Peixes</LinkWrapper> */}
        </S.VerticalStack>
      </S.HorizontalStack>
    </S.Wrapper>
  )
}
