/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import styled from "styled-components"

import Plus from "../../images/elements/plus.svg"
import { addToCart, cartCount } from "../../services/cart"

const CardWrapper = styled.div`
  position: relative;
  width: 265px;
  min-width: 265px;
  display: inline-block;
  height: 273px;
  background: #331F41;
  border: 3px solid #969393;
  box-sizing: border-box;
  padding: 22px;
  border-radius: 2px;
  margin-left: 35px;
  & > img {
    display: block;
    margin: 11px auto;
    height: 92px;
  }
  h5 {
    font-weight: bold;
    font-size: 18px !important;
    line-height: 22px !important;
    margin: 0;
    color: white;
  }
`

function ProductCard({ frontmatter, setCart }) {
  function handleAdd(e) {
    e.stopPropagation()
    e.preventDefault()
    addToCart(frontmatter)
    setCart(cartCount())
  }
  return (
    <CardWrapper>
      <img src={frontmatter.image.publicURL} alt={frontmatter.name} />
      <h5>{frontmatter.name}</h5>
      <p>{frontmatter.excerpt}</p>
      <button type="button" sx={styles.plus} onClick={handleAdd}>
        <img src={Plus} alt="Read more" />
      </button>
    </CardWrapper>
  )
}

ProductCard.propTypes = {
  frontmatter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
}

export default ProductCard

const styles = {
  plus: {
    position: "absolute",
    right: "4px",
    bottom: "4px",
    backgroundColor: "transparent",
    border: "none",
  },
}
