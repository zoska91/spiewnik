import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import "./songTemplate.css"
import Back from "../images/back.png"
import ReactHtmlParser from "react-html-parser"

const SongTemplate = ({ pageContext: { data } }) => (
  <div className="wrapper-song">
    <Link to="/" className="back">
      <img src={Back} alt="wstecz" />
    </Link>
    <h2 className="artist">{data.artist}</h2>
    <h1 className="title">{data.title}</h1>
    <ReactMarkdown source={data.tabs} className="tabs" />
    <ReactMarkdown source={data.chords} className="chords" />
    <div className="text">{ReactHtmlParser(data.aa.html)}</div>
    {console.log(data.artists.name)}
  </div>
)

export default SongTemplate

// only this works: https://github.com/wrakky/react-html-parser/blob/master/README.md
//  https://www.reddit.com/r/reactjs/comments/79ae3o/how_to_deal_with_rich_text_in_react/
