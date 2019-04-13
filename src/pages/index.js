import React from "react"
import logo from "../images/S.png"
import Search from "../images/lupa.png"
import { Link, graphql } from "gatsby"
import "./index.css"

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <>
    <div className="start">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>

    <div className="wrapper">
      <h2>Spis tresci</h2>
      <div className="search">
        <img src={Search} alt="search" />
        <input type="text" />
      </div>

      {edges.map(page => (
        <ul className="index">
          <li>
            <Link key={page.node.path} to={page.node.path}>
              {page.node.context.data.title}
            </Link>
          </li>
        </ul>
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
