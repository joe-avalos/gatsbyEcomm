/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Modal from "styled-react-modal"
import styled from "styled-components"

import { Container } from "../components/Grid"
import ModalCart from "../components/Common/ModalCart"
import Cart from "../images/elements/cart.svg"
import { cartCount, getCartItems } from "../services/cart"

const StyledModal = Modal.styled`
  position: absolute;
  width: 281px;
  height: 276px;
  left: 1116px;
  top: 59px;
  background: #220538;
  border: 2px solid #F5F5F5;
  box-sizing: border-box;
  border-radius: 4px;
`

export default function Header() {
  const count = cartCount()
  const [isOpen, setIsOpen] = useState(false)
  function toggleModal() {
    setIsOpen(!isOpen)
  }
  return (
    <header sx={styles.header}>
      <Container
        sx={{
          position: "relative",
          maxWidth: [
            "100%",
            "552px",
            "732px",
            "910px",
            "1100px",
            "1320px",
            "1480px",
          ],
        }}
      >
        <Link to="/" sx={styles.mainLink}>
          JAM SHOP
        </Link>
        <button sx={styles.cart} onClick={toggleModal}>
          <img src={Cart} alt="Shopping Cart" />
          <div sx={styles.dot}>{count}</div>
        </button>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <ModalCart items={getCartItems()} toggleModal={toggleModal} />
        </StyledModal>
      </Container>
    </header>
  )
}

const styles = {
  header: {
    padding: "20px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "1",
    background: "transparent",
  },
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  cart: {
    variant: "button.secondary",
    position: "absolute",
    right: 2,
  },
  dot: {
    background: "#301346",
    color: "white",
    borderRadius: "50%",
    padding: ".25rem",
    lineHeight: "0.5rem",
    minWidth: "0.5rem",
    position: "absolute",
    top: 0,
    right: 0,
    fontWeight: "300",
    fontFeatureSettings: "tnum",
    fontVariantNumeric: "tabular-nums",
  },
}
