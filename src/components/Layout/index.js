/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { ModalProvider } from "styled-react-modal"

import Header from "../Header"
import { cartCount } from "../../services/cart"

export default function Layout({ children, cart }) {
  return (
    <>
      <ModalProvider>
        <Header cart={cart} />
        <main sx={{ paddingTop: 50 }}>
          {children}
        </main>
        <footer />
      </ModalProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
