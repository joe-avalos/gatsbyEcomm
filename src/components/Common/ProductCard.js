/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import styled from "styled-components"

import Plus from "../../images/elements/plus.svg"

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

function ProductCard({ name, excerpt, img }) {
  return (
    <CardWrapper>
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <p>{excerpt}</p>
      <button type="button" sx={styles.plus}>
        <img src={Plus} alt="Read more" />
      </button>
    </CardWrapper>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
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
