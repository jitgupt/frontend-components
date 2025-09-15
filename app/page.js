"use client"
import { Container, StyledLink } from './common.styles'

export default function Home() {
  return (
    <Container>
      <StyledLink href={'/text-expander'}>Text Expander</StyledLink>
    </Container>
  )
}
