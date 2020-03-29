/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import { Container } from "../components/Grid"
import Cart from "../images/elements/cart.svg"
import { cartCount } from "../services/cart"

export default function Header() {
  const count = cartCount()
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
        <button sx={styles.cart}>
          <img src={Cart} alt="Shopping Cart" />
          <div sx={styles.dot}>{count}</div>
        </button>
      </Container>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

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
