import React, { Component } from "react"
import Search from "../images/search.png"
import { Link, graphql } from "gatsby"
import "./index.css"

class IndexPage extends Component {
  state = {
    data: this.props.data.allSitePage,
    result: [],
    value: "",
  }

  handleChangeValue = e => {
    const value = e.target.value
    this.setState({
      value,
    })
  }

  handleSearch = e => {
    e.preventDefault()

    let value = this.state.value.toUpperCase()

    const songList = this.state.data.edges.map(page => ({
      title: page.node.context.data.title.toUpperCase(),
      path: page.node.path,
    }))

    let list = songList.filter(page => page.title.includes(value))

    this.setState({
      result: list,
    })
  }

  render() {
    const count = this.state.result.length
    let list = []

    if (count === 0) {
      list = this.state.data.edges.map(page => (
        <li>
          <Link key={page.node.path} to={page.node.path}>
            {page.node.context.data.title}
          </Link>
        </li>
      ))
    } else {
      list = this.state.result.map(title => (
        <li>
          <Link key={title.path} to={title.path}>
            {title.title.toLowerCase()}
          </Link>
        </li>
      ))
    }

    return (
      <>
        <div className="wrapper" onChange={this.handleSearch}>
          <h2>Spis tresci</h2>
          <form className="search">
            <input
              type="text"
              id="value"
              value={this.state.value}
              onChange={this.handleChangeValue}
            />
            <img src={Search} alt="search" />
          </form>
          <ul className="index">{list}</ul>
        </div>
      </>
    )
  }
}

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
