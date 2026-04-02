"use client"
import { Container, StyledLink } from './common.styles'

export default function Home() {
  return (
    <Container>
      <StyledLink href={'/accordion'}>Accordion</StyledLink>
      <StyledLink href={'/auto-complete'}>Auto Complete</StyledLink>
      <StyledLink href={'/image-slider'}>Image Slider</StyledLink>
      <StyledLink href={'/infinite-scroll'}>Infinite Scroll</StyledLink>
      <StyledLink href={'/live-chat'}>Live Chat</StyledLink>
      <StyledLink href={'/nested-comments'}>Nested Comments</StyledLink>
      <StyledLink href={'/pagination'}>Pagination</StyledLink>
      <StyledLink href={'/text-expander'}>Text Expander</StyledLink>
      <StyledLink href={'/star-rating'}>Star Rating</StyledLink>
    </Container>
  )
}
