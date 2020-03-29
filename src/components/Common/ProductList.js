/** @jsx jsx */
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx, Styled } from "theme-ui"

import { Row, Col } from "../Grid"
import ProductCard from "./ProductCard"
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
              image
              excerpt
            }
          }
        }
      }
    }
  `)
  const totalProds = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.name !== null)
  const count = totalProds.length
  const [first, setFirst] = useState(0)
  const [last, setLast] = useState(count < 5 ? count - 1 : 3)
  const [disabledLeft, setDisabledLeft] = useState(true)
  const [disabledRight, setDisabledRight] = useState(count < 5)
  
  function moveRight() {
    if (count < 5) return
    setDisabledRight(true)
    if (last < count - 1) {
      setFirst(first + 1)
      setLast(last + 1)
      setDisabledLeft(false)
    }
    if (last < count - 1) setDisabledRight(false)
  }
  function moveLeft() {
    if (count < 5) return
    setDisabledLeft(true)
    if (first > 0) {
      setFirst(first - 1)
      setLast(last - 1)
      setDisabledRight(false)
    }
    if (first > 0) setDisabledLeft(false)
  }
  
  return (
    <section sx={{ paddingTop: [10, 20, 64] }}>
      <Row styles={{ justifyContent: ["left"], position: "relative" }}>
        <button sx={styles.arrowLeft} disabled={disabledLeft} onClick={moveLeft}>
          <img src={Arrow} alt="Arrow left" />
        </button>
        <Col styles={styles.ListWrapper}>
          {totalProds.map(({ node }, index) => {
            if (index >= first && index <= last) {
              return (
                <ProductCard
                  key={node.id}
                  name={node.frontmatter.name}
                  slug={node.frontmatter.slug}
                  excerpt={node.frontmatter.excerpt}
                />
              )
            } else {
              return null
            }
          },
          )}
        </Col>
        <button sx={styles.arrowRight} disabled={disabledRight} onClick={moveRight}>
          <img src={Arrow} alt="Arrow right" />
        </button>
      </Row>
    </section>
  )
}

export default ProductList

const styles = {
  ListWrapper: {
    display: "flex",
    overflowX: "hidden",
    position: "relative",
    height: 273,
    maxWidth: "100%",
  },
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
