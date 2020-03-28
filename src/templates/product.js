/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

import { Container, Row, Col } from "../components/Grid"
import Layout from "../components/layout"
import Dummy from "../images/products/dummy.svg"

export default function ProductPage({ data }) {
  const prod = data.markdownRemark
  
  return (
    <Layout>
      <Container>
        <section>
          <Row>
            <Col sx={{ width: "1/2", height: 363 }}>
              <img style={styles.imgWrapper} src={Dummy} alt={prod.frontmatter.name} />
            </Col>
            <Col sx={{ width: "1/2" }}>
              <p>{prod.frontmatter.tag}</p>
              <h3>{prod.frontmatter.name}</h3>
              <p>{prod.frontmatter.description}</p>
              <h4>{prod.frontmatter.price}</h4>
              <Styled.button>Add to cart</Styled.button>
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
}

ProductPage.propTypes = {
  data: PropTypes.element.isRequired,
}
