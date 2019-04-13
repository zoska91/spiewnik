import React from "react"
import Img from "../images/S.png"
import { Link, graphql } from "gatsby"
import "./index.css"
import "./BackGround.css"

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <>
    {/* <div className="wrapper start">
      <div className="logo">
        <img src={Img} alt="S" />
      </div>
    </div> */}

    <div className="wrapper">
      <h2>Spis treści</h2>
      {edges.map(page => (
        <p>
          <Link key={page.node.path} to={page.node.path}>
            {page.node.context.data.title}
          </Link>
        </p>
      ))}
    </div>
  </>
)

export const allSongPagesQuery = graphql`
  {
    allSitePage(
      filter: {
        component: {
          eq: "G:/stronyWWW/inne/try/spiewnik/src/Templates/songTemplate.js"
        }
      }
    ) {
      edges {
        node {
          path
          component
          context {
            data {
              title
            }
          }
        }
      }
    }
  }
`

export default IndexPage
