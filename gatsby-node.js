const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("src/templates/product.js")
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              name
              slug
              image
              description
              tag
              price
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) throw res.errors
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.slug}`,
        component: productTemplate,
      })
    })
  })
}
