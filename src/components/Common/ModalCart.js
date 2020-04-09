/** @jsx jsx */
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

import Dummy from "../../images/products/dummy.svg"

const CartItem = styled.li`
  padding: 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img{
    margin-right: 10px;
    height: 28px;
  }
  p{
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: white;
  }
`

const StyledHeader = styled.header`
  position: absolute;
  right: 0;
  top: -30px;
  cursor: pointer;
`

function ModalCart({ items, toggleModal }) {
  return (
    <>
      <StyledHeader onClick={toggleModal}>
        ^
      </StyledHeader>
      <ul sx={styles.ul}>
        {items && items.length > 0 && items.map((item, idx) => {
          return (
            <CartItem key={idx}>
              <img src={Dummy} alt="Dummy img" />
              <p>{item.name}</p>
              <p>$ {item.price}</p>
            </CartItem>
          )
        })}
      </ul>
      <button sx={styles.submit}>SUBMIT</button>
    </>
  )
}

ModalCart.propTypes = {
  items: PropTypes.array,
  toggleModal: PropTypes.func.isRequired,
}

const styles = {
  ul: {
    padding: "0 29px 0 18px",
    position: "relative",
    maxHeight: 220,
  },
  submit: {
    variant: "button.primary",
    position: "absolute",
    right: 2,
    bottom: 2,
    padding: "6px 21px",
    cursor: "pointer",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: "14px",
    color: "white",
  },
}

export default ModalCart
