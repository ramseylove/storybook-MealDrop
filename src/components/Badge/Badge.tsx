// src/components/Badge/Badge.tsx
import styled, { css } from 'styled-components'
import { Body } from 'components/typography'

const Container = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    padding: 3px 8px;
    background: #e9e9e9;
    border-radius: 4px;
    display: inline-block;
    span {
      color: #636363;
    }
    span:first-letter {
      text-transform: capitalize;
    }
  `
)

type BadgeProps = {
  text: string
  // We use classname to make the component extensible by styled-components
  className?: string
}

export const Badge = ({ text, className }: BadgeProps) => (
  <Container className={className}>
    <Body type="span" size="S">
      {text}
    </Body>
  </Container>
)
