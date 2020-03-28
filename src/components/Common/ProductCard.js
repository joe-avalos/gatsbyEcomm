/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

import Dummy from "../../images/products/dummy.svg"

function ProductCard({ name, slug, excerpt }) {
  return (
    <Styled.div sx={styles.cardWrapper}>
      <img src={Dummy} alt={name} />
      <h5>{name}</h5>
      <p>{excerpt}</p>
      <Link to={slug}>More</Link>
    </Styled.div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default ProductCard

const styles = {
  cardWrapper: {
    width: 265,
    display: "inline-block",
    height: 273,
    background: "#331F41",
    border: "3px solid #969393",
    boxSizing: "border-box",
    padding: 22,
    borderRadius: 2,
    "&:not(:last-of-type)": {
      marginRight: 40,
    },
    img: {
      display: "block",
      margin: "11px auto",
      height: 92,
    },
    h5: {
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif",
      fontSize: "18px !important",
      lineHeight: "22px !important",
      margin: 0,
      color: "white",
    },
  },
}
