/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

import { Container, Row, Col } from "../components/Grid"
import { addToCart } from "../services/cart"
import Layout from "../components/layout"
import Dummy from "../images/products/dummy.svg"

export default function ProductPage({ data }) {
  const prod = data.markdownRemark
  function handleAdd() {
    addToCart(prod.frontmatter)
  }
  return (
    <Layout>
      <Container>
        <section style={{ padding: "100px 0" }}>
          <Row>
            <Col styles={{ width: "1/2" }}>
              <img style={styles.imgWrapper} src={Dummy} alt={prod.frontmatter.name} />
            </Col>
            <Col styles={{ width: "1/2", fontFamily: "Roboto, sans-serif" }}>
              <p sx={styles.tag}>{prod.frontmatter.tag}</p>
              <p sx={styles.title}>{prod.frontmatter.name}</p>
              <p sx={styles.description}>{prod.frontmatter.description}</p>
              <p sx={styles.price}>$ {prod.frontmatter.price}</p>
              <button
                sx={{ variant: "button.primary", mx: ["auto", null, 0] }}
                onClick={handleAdd}
              >
                Add to cart
              </button>
            </Col>
          </Row>
        </section>
      </Container>
    </Layout>
  )
}

export const productQuery = graphql`
    query productBySlug($path: String) {
        markdownRemark( frontmatter: { slug: { eq: $path } }) {
            frontmatter {
                name
                slug
                image
                description
                price
                tag
            }
        }
    }
`

const styles = {
  imgWrapper: {
    display: "block",
    margin: "auto",
    height: "100%",
  },
  tag: {
    fontSize: 14,
    lineHeight: "16px",
    color: "secondary",
    textTransform: "uppercase",
    margin: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: "37px",
    color: "white",
    margin: 0,
  },
  description: {
    fontSize: 18,
    lineHeight: "21px",
    color: "light",
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: "26px",
    color: "white",
  },
}

ProductPage.propTypes = {
  data: PropTypes.element.isRequired,
}
