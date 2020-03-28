/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../../Grid"

function CommunityChoices() {
  return (
    <section sx={{ paddingTop: [60, 60, 105] }}>
      <Row styles={{ justifyContent: ["left"] }}>
        <Col styles={styles.leadWrapper}>
          <Styled.h3>
            Explore community choices
          </Styled.h3>
        </Col>
      </Row>
      <Row>
        <Col styles={{ width: "1/3" }}>
          <Styled.p sx={styles.lead}>
            Updated daily based on most popular choices among dev community
          </Styled.p>
        </Col>
      </Row>
    </section>
  )
}

export default CommunityChoices

const styles = {
  leadWrapper: {
    width: "5/12",
    position: "relative",
    fontWeight: "bold",
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "28px !important",
      lineHeight: "34px !important",
      color: "white",
      marginBottom: 20,
    },
  },
  lead: {
    color: "light",
    margin: 0,
  },
}
