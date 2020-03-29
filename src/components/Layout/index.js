/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { ModalProvider } from "styled-react-modal"

import Header from "../Header"

export default function Layout({ children }) {
  return (
    <>
      <ModalProvider>
        <Header />
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
