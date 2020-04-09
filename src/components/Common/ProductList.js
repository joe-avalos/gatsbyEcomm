/** @jsx jsx */
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx } from "theme-ui"
import styled from "styled-components"

import { Row } from "../Grid"
import Scroller from "./Scroller"
import Arrow from "../../images/elements/arrow.svg"

function ProductList() {
  const data = useStaticQuery(graphql`
      query productQuery{
          allMarkdownRemark {
              edges {
                  node {
                      id
                      frontmatter {
                          name
                          slug
                          image{
                              publicURL
                          }
                          excerpt
                      }
                  }
              }
          }
      }
  `)
  const totalProds = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.name !== null)
  const count = totalProds.length
  const scrollerWidth = count * 305
  const getWidth = () => (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) * 0.85
  const [extraWidth, setExtraWidth] = useState(scrollerWidth - getWidth())
  useEffect(() => {
    console.log(extraWidth)
    const resizeListener = () => {
      setExtraWidth(scrollerWidth - getWidth())
    }
    // set resize listener
    window.addEventListener("resize", resizeListener)
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener)
    }
  }, [])
  const [bgPos, setBgPos] = useState(0)
  const [mouseDR, setMouseDR] = useState(0)
  const [mouseDL, setMouseDL] = useState(0)
  const [disabledLeft, setDisabledLeft] = useState(true)
  const [disabledRight, setDisabledRight] = useState(extraWidth < 0)
  useEffect(() => {
    if (mouseDR === 1 && (extraWidth + bgPos) >= 0) {
      setDisabledLeft(false)
      setBgPos(bgPos - 300)
    }
    checkRight()
  }, [mouseDR])
  useEffect(() => {
    if (mouseDL === 1 && bgPos < 0) {
      setDisabledRight(false)
      setBgPos(bgPos + 300)
    }
    checkLeft()
  }, [mouseDL])
  function checkRight() {
    if ((extraWidth + bgPos) <= 0) {
      setDisabledRight(true)
    } else {
      setDisabledRight(false)
    }
  }
  function checkLeft() {
    if (bgPos >= 0) {
      setDisabledLeft(true)
    } else {
      setDisabledLeft(false)
    }
  }
  return (
    <section sx={{ paddingTop: [10, 20, 64] }}>
      <Row styles={{ justifyContent: ["left"], position: "relative" }}>
        <button
          sx={styles.arrowLeft}
          disabled={disabledLeft}
          onClick={() => setMouseDL(1)}
          onMouseUp={() => setMouseDL(0)}
        >
          <img src={Arrow} alt="Arrow left" />
        </button>
        <ListWrapper>
          <Scroller totalProds={totalProds} bgPos={bgPos} />
        </ListWrapper>
        <button
          sx={styles.arrowRight}
          disabled={disabledRight}
          onClick={() => setMouseDR(1)}
          onMouseUp={() => setMouseDR(0)}
        >
          <img src={Arrow} alt="Arrow right" />
        </button>
      </Row>
    </section>
  )
}

export default ProductList

const ListWrapper = styled.div`
  display: block;
  overflow-x: hidden;
  position: relative;
  height: 273px;
  max-width: 85vw;
`

const styles = {
  arrowLeft: {
    variant: "button.secondary",
    position: "absolute",
    top: "calc(50% - 36px)",
    left: -82,
  },
  arrowRight: {
    variant: "button.secondary",
    position: "absolute",
    top: "calc(50% - 36px)",
    right: -70,
    transform: "rotate(-180deg)",
  },
}
