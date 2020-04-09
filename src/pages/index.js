import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import CommunityChoices from "../components/HomePage/CommunityChoices"
import ProductList from "../components/Common/ProductList"
import { Container } from "../components/Grid"
import { cartCount } from "../services/cart"

export default function IndexPage() {
  const [cart, setCart] = useState(cartCount())
  return (
    <Layout cart={cart}>
      <SEO title="Home" />
      <Container>
        <Hero />
        <CommunityChoices />
        <ProductList setCart={setCart} />
      </Container>
    </Layout>
  )
}
