const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const songTemplate = path.resolve(`src/Templates/songTemplate.js`)
  const songsQuery = await graphql(`
    {
      spiewnik {
        songs: songsConnection(first: 1000) {
          edges {
            node {
              id
              title
              text
              tabs
              artist {
                id
              }
              slug
              foto {
                status
                updatedAt
                createdAt
                id
                handle
                fileName
                height
                width
                size
                mimeType
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
