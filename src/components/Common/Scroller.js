/** @jsx jsx */
import React from "react"
import styled from "styled-components"

import ProductCard from "./ProductCard"
import { Link } from "gatsby"
import { jsx } from "theme-ui"

const StyledLink = styled(Link)`
  color: inherit;
  &:active {
    color: inherit;
    text-decoration: none;
  }
`
const StyledScroller = styled.div`
  width: ${props => props.totalProds * 305}px;
  height: 273px;
  position: relative;
  left: ${props => props.bgPos}px;
`

const Scroller = ({ totalProds, bgPos, setCart }) => (
  <StyledScroller totalProds={totalProds.length} bgPos={bgPos}>
    {totalProds.map(({ node }) => {
      return (
        <StyledLink
          to={node.frontmatter.slug}
          key={node.id}
        >
          <ProductCard
            frontmatter={node.frontmatter}
            setCart={setCart}
          />
        </StyledLink>
      )
    })}
  </StyledScroller>
)

export default Scroller
