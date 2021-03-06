const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const songTemplate = path.resolve(`src/Templates/songTemplate.js`)
  const songsQuery = await graphql(`
    {
      spiewnik {
        songs: songsConnection(first: 1000) {
          edges {
            node {
              status
              updatedAt
              createdAt
              id
              title
              artists {
                artsitName
                id
              }
              slug
              artist
              tabs
              text {
                html
              }
              chords
            }
          }
        }
      }
    }
  `)

  songsQuery.data.spiewnik.songs.edges.forEach(song => {
    createPage({
      path: song.node.slug,
      component: songTemplate,
      context: {
        data: song.node,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
