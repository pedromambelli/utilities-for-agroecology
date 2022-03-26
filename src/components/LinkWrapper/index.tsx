import Link from 'next/link'
import * as S from './styles'
type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Link>
    <Link href={href}>{children}</Link>
  </S.Link>
)

export default LinkWrapper
